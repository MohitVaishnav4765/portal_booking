const http = require('http');
const fs = require('fs');
const path = require('path');
const { encode, decode } = require('/Users/waseemakram/.nvm/versions/node/v24.20.0/lib/node_modules/@figwright/mcp/node_modules/@msgpack/msgpack');

const outDir = path.join(__dirname, '../apps/customer-web/public/images');

async function callTool(toolName, args = {}) {
  const payload = { requestId: 'req_' + Date.now(), toolName, args };
  const encoded = encode(payload);
  return new Promise((resolve, reject) => {
    const req = http.request(
      'http://127.0.0.1:3055/rpc',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/msgpack', 'Content-Length': encoded.length },
      },
      (res) => {
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => resolve(decode(Buffer.concat(chunks))));
      }
    );
    req.on('error', reject);
    req.write(encoded);
  });
}

async function exportImage(nodeId, fileName, scale = 2) {
  try {
    const res = await callTool('get_screenshot', { nodeIds: [nodeId], format: 'PNG', scale });
    if (res.result && res.result.images && res.result.images[0] && res.result.images[0].base64) {
      const buf = Buffer.from(res.result.images[0].base64, 'base64');
      fs.writeFileSync(path.join(outDir, fileName), buf);
      console.log(`✓ Exported ${fileName} (${buf.length} bytes)`);
      return true;
    }
  } catch (e) {
    console.error(`✗ Export failed for ${fileName}:`, e.message);
  }
  return false;
}

async function main() {
  // Let's export the full hero section background / graphic: 1574:3046 (Clip path group)
  console.log('Exporting Hero graphic...');
  await exportImage('1574:3046', 'hero-bg.png', 1.5);

  // Let's export Footer Banner entire strip: 1574:3258
  console.log('Exporting Footer Banner...');
  await exportImage('1574:3258', 'footer-ticket-banner.png', 2);

  // Inspect Navbar children
  const nav = await callTool('get_node', { nodeId: '1574:3059' });
  console.log('\n--- TopNavBar Children ---');
  for (const c of ((nav.result.node && nav.result.node.children) || [])) {
    console.log(` - [${c.type}] "${c.name}" (${c.id}) size: ${c.width}x${c.height}`);
  }

  // Inspect Places We Cover: 1574:3102
  const places = await callTool('get_node', { nodeId: '1574:3102' });
  console.log('\n--- Places We Cover Children ---');
  for (const c of ((places.result.node && places.result.node.children) || [])) {
    console.log(` - [${c.type}] "${c.name}" (${c.id}) size: ${c.width}x${c.height}`);
  }
}

main().catch(console.error);
