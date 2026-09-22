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
    req.end();
  });
}

async function inspectNodeRecursive(nodeId, depth = 0, maxDepth = 3) {
  const indent = '  '.repeat(depth);
  const res = await callTool('get_node', { nodeId });
  const node = res.result && res.result.node;
  if (!node) return;
  console.log(`${indent}- [${node.type}] "${node.name}" (${node.id}) ${Math.round(node.width)}x${Math.round(node.height)} layout: ${node.layout ? node.layout.mode : 'none'} spacing: ${node.layout ? node.layout.itemSpacing : ''}`);
  if (depth < maxDepth && node.children) {
    for (const c of node.children) {
      await inspectNodeRecursive(c.id, depth + 1, maxDepth);
    }
  }
}

async function main() {
  console.log('=== Inspecting Frame 3681 (2252:3420) tree ===');
  await inspectNodeRecursive('2252:3420', 0, 3);
}

main().catch(console.error);
