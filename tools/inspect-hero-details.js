const http = require('http');
const fs = require('fs');
const path = require('path');
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
  });
}

async function main() {
  console.log('=== Inspecting Navbar (1574:3058) ===');
  const nav = await callTool('get_node', { nodeId: '1574:3058' });
  console.log(JSON.stringify(nav.result.node, null, 2).slice(0, 1500));

  console.log('\n=== Inspecting Hero Background (1574:3047 & 1574:3049) ===');
  const heroBg1 = await callTool('get_node', { nodeId: '1574:3047' });
  console.log('1574:3047:', heroBg1.result && heroBg1.result.node ? heroBg1.result.node.name : 'null');
  const heroBg2 = await callTool('get_node', { nodeId: '1574:3049' });
  console.log('1574:3049:', heroBg2.result && heroBg2.result.node ? heroBg2.result.node.name : 'null');

  console.log('\n=== Inspecting Footer Banner Children (1574:3258) ===');
  const fb = await callTool('get_node', { nodeId: '1574:3258' });
  for (const c of ((fb.result.node && fb.result.node.children) || [])) {
    console.log(` - [${c.type}] "${c.name}" (${c.id}) size: ${c.width}x${c.height}`);
  }
}

main().catch(console.error);
