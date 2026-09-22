const fs = require('fs');
const path = require('path');
const http = require('http');
const { encode, decode } = require('/Users/waseemakram/.nvm/versions/node/v24.20.0/lib/node_modules/@figwright/mcp/node_modules/@msgpack/msgpack');

const outDir = path.join(__dirname, '../apps/customer-web/public/images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function exportNode(nodeId, fileName) {
  const payload = {
    requestId: 'req_' + Date.now(),
    toolName: 'get_screenshot',
    args: { nodeIds: [nodeId], format: 'PNG' },
  };
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
            const decoded = decode(Buffer.concat(chunks));
            if (decoded.result && decoded.result.images && decoded.result.images[0] && decoded.result.images[0].base64) {
              const buf = Buffer.from(decoded.result.images[0].base64, 'base64');
              const target = path.join(outDir, fileName);
              fs.writeFileSync(target, buf);
              console.log(`✓ Saved: ${fileName} (${buf.length} bytes)`);
              resolve(true);
            } else {
              console.log(`✗ Failed: ${fileName}`, decoded.result || decoded);
              resolve(false);
            }
          } catch (e) {
            console.error(`✗ Decode error for ${fileName}:`, e.message);
            resolve(false);
          }
        });
      }
    );
    req.on('error', (err) => {
      console.error(`✗ Request error for ${fileName}:`, err.message);
      resolve(false);
    });
    req.write(encoded);
    req.end();
  });
}

const list = [
  { id: '2248:3312', name: 'icon-mobile.png' },
  { id: '2251:3379', name: 'icon-discount.png' },
  { id: '2252:3389', name: 'icon-calendar.png' },
  { id: '2098:1168', name: 'icon-headphones.png' },
  { id: '2098:1164', name: 'icon-security.png' },
  { id: '2098:1158', name: 'icon-globe.png' },
  { id: '1875:1811', name: 'card-jeddah.png' },
  { id: '1875:1821', name: 'card-madinah.png' },
  { id: '1875:1854', name: 'card-amman.png' },
  { id: '1884:259', name: 'banner-makkah.png' },
  { id: '1574:3250', name: 'banner-operator.png' },
];

async function run() {
  console.log('Exporting assets sequentially...');
  for (const item of list) {
    await exportNode(item.id, item.name);
  }
  console.log('All assets exported successfully!');
}

run();
