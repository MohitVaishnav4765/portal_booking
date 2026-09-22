const http = require('http');
const fs = require('fs');
const path = require('path');
const { encode, decode } = require('/Users/waseemakram/.nvm/versions/node/v24.20.0/lib/node_modules/@figwright/mcp/node_modules/@msgpack/msgpack');

const artifactDir = '/Users/waseemakram/.gemini/antigravity/brain/6c0cba46-7d0e-4350-9006-718ad7ede66a';
const publicDir = path.join(__dirname, '../apps/customer-web/public/captures');

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

async function capture(nodeId, filename) {
  console.log(`Capturing ${nodeId} -> ${filename}...`);
  const res = await callTool('get_screenshot', { nodeIds: [nodeId], format: 'PNG', scale: 1 });
  if (res.result && res.result.images && res.result.images[0] && res.result.images[0].base64) {
    const buf = Buffer.from(res.result.images[0].base64, 'base64');
    fs.writeFileSync(path.join(artifactDir, filename), buf);
    fs.writeFileSync(path.join(publicDir, filename), buf);
    console.log(`✓ Saved ${filename}: ${buf.length} bytes (${res.result.images[0].width}x${res.result.images[0].height})`);
  } else {
    console.error('Failed to capture:', res);
  }
}

async function main() {
  await capture('2252:3420', 'frame-3681.png');
}

main().catch(console.error);
