const http = require('http');
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
        res.on('end', () => {
          try {
            resolve(decode(Buffer.concat(chunks)));
          } catch (e) {
            reject(e);
          }
        });
      }
    );
    req.on('error', reject);
    req.write(encoded);
    req.end();
  });
}

async function main() {
  console.log('Testing search_nodes with various queries...');
  const tests = [
    { name: 'search_nodes', args: { name: 'page' } },
    { name: 'search_nodes', args: { name: 'screen' } },
    { name: 'search_nodes', args: { name: 'frame' } },
    { name: 'search_nodes', args: { name: 'bus' } },
    { name: 'search_nodes', args: { name: 'book' } },
    { name: 'search_nodes', args: { name: 'search' } },
    { name: 'search_nodes', args: { name: 'seat' } },
    { name: 'search_nodes', args: { name: 'login' } },
    { name: 'search_nodes', args: { name: 'signup' } },
    { name: 'search_nodes', args: { name: 'dashboard' } },
    { name: 'search_nodes', args: { name: 'admin' } },
    { name: 'search_nodes', args: { name: 'operator' } },
    { name: 'search_nodes', args: { name: 'ticket' } },
  ];

  for (const t of tests) {
    const res = await callTool(t.name, t.args);
    const nodes = (res.result && res.result.nodes) || [];
    console.log(`Query "${t.args.name}": found ${nodes.length} nodes`);
    for (const n of nodes) {
      if (n.type === 'FRAME' || n.type === 'SECTION' || n.type === 'COMPONENT') {
        console.log(`  [${n.type}] "${n.name}" (id: ${n.id}, width: ${n.width}, height: ${n.height}, parentId: ${n.parentId})`);
      }
    }
  }
}

main().catch(console.error);
