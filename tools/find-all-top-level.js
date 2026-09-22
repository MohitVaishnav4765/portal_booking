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
  // Let's get node details for the sections we already know:
  const knownSections = [
    '602:23307', // "Admine portal"
    '840:2519',  // "Operator Portal"
    '664:2490',  // "ticket booking flow"
    '1859:42',   // "website home page"
    '2252:3420', // "HOME PAGE"
  ];

  console.log('Fetching known top sections...');
  const res = await callTool('get_nodes_info', { nodeIds: knownSections });
  const nodes = res.result && res.result.nodes ? res.result.nodes : [];
  for (const n of nodes) {
    if (n) {
      console.log(`=== [${n.type}] "${n.name}" (id: ${n.id}, size: ${n.width}x${n.height}, children: ${(n.children || []).length}) ===`);
      if (n.children) {
        for (const c of n.children) {
          console.log(`   - [${c.type}] "${c.name}" (id: ${c.id}, size: ${c.width}x${c.height})`);
        }
      }
    }
  }
}

main().catch(console.error);
