const http = require('http');
const fs = require('fs');
const { encode, decode } = require('/Users/waseemakram/.nvm/versions/node/v24.20.0/lib/node_modules/@figwright/mcp/node_modules/@msgpack/msgpack');

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
    req.end();
  });
}

async function main() {
  const res = await callTool('get_node', { nodeId: '1574:3045' }); // Frame 3439 (Hero + Nav)
  console.log('--- Frame 3439 Children ---');
  for (const c of (res.result.node.children || [])) {
    console.log(`[${c.type}] "${c.name}" (${c.id}) size: ${c.width}x${c.height}`);
  }

  const footerBanner = await callTool('get_node', { nodeId: '1574:3258' });
  console.log('\n--- Footer Banner (1574:3258) ---');
  console.log(JSON.stringify(footerBanner.result.node, null, 2).slice(0, 1500));

  const overlay = await callTool('get_node', { nodeId: '1574:3352' });
  console.log('\n--- Overlay+Border+OverlayBlur (1574:3352) ---');
  console.log(JSON.stringify(overlay.result.node, null, 2).slice(0, 1500));
}

main().catch(console.error);
