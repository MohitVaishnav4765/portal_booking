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

async function main() {
  // Let's find the payment grid frame: I2035:1798;2136:1847
  // or search for American Express and Union Pay
  const searchRes = await callTool('search_nodes', { name: 'amex' });
  console.log('Amex search:', (searchRes.result && searchRes.result.nodes) || []);

  const unionRes = await callTool('search_nodes', { name: 'union' });
  console.log('Union search:', (unionRes.result && unionRes.result.nodes) || []);
}

main().catch(console.error);
