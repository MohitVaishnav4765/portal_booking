const fs = require('fs');
const path = require('path');
const http = require('http');
const { encode, decode } = require('/Users/waseemakram/.nvm/versions/node/v24.20.0/lib/node_modules/@figwright/mcp/node_modules/@msgpack/msgpack');

const outDir = path.join(__dirname, '../apps/customer-web/public/images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

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

const assets = [
  { id: '1574:3062', name: 'logo.png', format: 'PNG' },
  { id: 'I2035:1798;2035:1438', name: 'logo-footer.png', format: 'PNG' },
  { id: '1875:1812', name: 'dest-jeddah.png', format: 'PNG' },
  { id: '1875:1822', name: 'dest-madinah.png', format: 'PNG' },
  { id: '1875:1855', name: 'dest-amman.png', format: 'PNG' },
  { id: '1884:260', name: 'bus-fleet-1.png', format: 'PNG' },
  { id: '1884:262', name: 'bus-fleet-2.png', format: 'PNG' },
  { id: '2248:3312', name: 'icon-mobile.png', format: 'PNG' },
  { id: '2251:3379', name: 'icon-discount.png', format: 'PNG' },
  { id: '2252:3389', name: 'icon-calendar.png', format: 'PNG' },
  { id: '2098:1168', name: 'icon-headphones.png', format: 'PNG' },
  { id: '2098:1164', name: 'icon-security.png', format: 'PNG' },
  { id: '2098:1158', name: 'icon-globe.png', format: 'PNG' },
  { id: 'I2035:1798;2136:1848', name: 'payment-visa.png', format: 'PNG' },
  { id: 'I2035:1798;2136:1850', name: 'payment-mastercard.png', format: 'PNG' },
  { id: 'I2035:1798;2136:1852', name: 'payment-applepay.png', format: 'PNG' },
  { id: 'I2035:1798;2136:1855', name: 'payment-googlepay.png', format: 'PNG' },
  { id: 'I2035:1798;2136:1857', name: 'payment-samsungpay.png', format: 'PNG' },
  { id: 'I2035:1798;2136:1859', name: 'payment-stcpay.png', format: 'PNG' },
];

async function exportAll() {
  console.log(`Starting export of ${assets.length} assets from Figma...`);

  // Batch in groups of 4 to stay well within memory and socket timeouts
  for (let i = 0; i < assets.length; i += 4) {
    const chunk = assets.slice(i, i + 4);
    const nodeIds = chunk.map((a) => a.id);

    try {
      const res = await callTool('get_screenshot', { nodeIds, format: 'PNG', scale: 2 });
      if (res.result && res.result.images) {
        for (const img of res.result.images) {
          const matched = chunk.find((c) => c.id === img.nodeId);
          if (matched && img.base64) {
            const buf = Buffer.from(img.base64, 'base64');
            const targetPath = path.join(outDir, matched.name);
            fs.writeFileSync(targetPath, buf);
            console.log(`Saved: ${matched.name} (${img.width}x${img.height}, ${buf.length} bytes)`);
          }
        }
      } else {
        console.log(`Failed chunk ${i}:`, JSON.stringify(res).slice(0, 200));
      }
    } catch (err) {
      console.error(`Error chunk ${i}:`, err.message);
    }
  }

  console.log('Export finished!');
}

exportAll();
