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
  console.log('Exporting Arabic assets...');
  // Inspect 2337:4704 to find clip path group
  const f3439 = await callTool('get_node', { nodeId: '2337:4704' });
  const clipId = f3439.result.node.children[0].id; // Clip path group
  await exportImage(clipId, 'hero-bg-ar.png', 1.5);
  await exportImage('2337:4928', 'footer-ticket-banner-ar.png', 2);
  await exportImage('2337:4854', 'banner-makkah-ar.png', 2);
  await exportImage('2347:2921', 'banner-operator-ar.png', 2);
  console.log('Done!');
}

main().catch(console.error);
