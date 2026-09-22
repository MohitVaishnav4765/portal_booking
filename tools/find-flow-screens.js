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
        res.on('end', () => resolve(decode(Buffer.concat(chunks))));
      }
    );
    req.on('error', reject);
    req.write(encoded);
    req.end();
  });
}

async function run() {
  const queries = ['filter', 'result', 'select', 'seat', 'trip', 'schedule', 'package', 'detail', 'modal'];
  const results = new Map();

  for (const q of queries) {
    const res = await callTool('search_nodes', { name: q });
    const nodes = (res.result && res.result.nodes) || [];
    for (const n of nodes) {
      if (n.type === 'FRAME' && n.width >= 500 && n.height >= 400) {
        if (!results.has(n.id)) {
          results.set(n.id, n);
        }
      }
    }
  }

  console.log(`Found ${results.size} additional major screens/frames:`);
  for (const [id, s] of results.entries()) {
    console.log(`  - [${id}] "${s.name}" (${Math.round(s.width)}x${Math.round(s.height)}, parent: ${s.parentId})`);
  }
}

run().catch(console.error);
