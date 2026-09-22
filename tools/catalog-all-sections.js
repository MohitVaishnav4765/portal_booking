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

async function main() {
  const res = await callTool('search_nodes', { type: 'SECTION' });
  const sections = (res.result && res.result.nodes) || [];
  console.log(`Total sections found: ${sections.length}`);
  
  // Sort sections hierarchically
  const byParent = {};
  for (const s of sections) {
    byParent[s.parentId] = byParent[s.parentId] || [];
    byParent[s.parentId].push(s);
  }

  function printTree(parentId, depth = 0) {
    const list = byParent[parentId] || [];
    for (const item of list) {
      console.log(`${'  '.repeat(depth)}📂 [SECTION] "${item.name}" (id: ${item.id}, ${Math.round(item.width)}x${Math.round(item.height)})`);
      printTree(item.id, depth + 1);
    }
  }

  console.log('\n--- ROOT LEVEL ON PAGE 238:3 ---');
  printTree('238:3', 0);
  
  // Also check any sections with other parents
  const rootIds = new Set(['238:3', ...sections.map(s => s.id)]);
  for (const pid of Object.keys(byParent)) {
    if (!rootIds.has(pid)) {
      console.log(`\n--- UNDER PARENT ${pid} ---`);
      printTree(pid, 0);
    }
  }
}

main().catch(console.error);
