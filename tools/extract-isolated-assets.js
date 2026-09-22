const http = require('http');
const fs = require('fs');
const path = require('path');
const { encode, decode } = require('/Users/waseemakram/.nvm/versions/node/v24.20.0/lib/node_modules/@figwright/mcp/node_modules/@msgpack/msgpack');

const outDir = path.join(__dirname, '../apps/customer-web/public/images');
fs.mkdirSync(outDir, { recursive: true });

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

async function exportNode(nodeId, fileName, scale = 2) {
  try {
    const res = await callTool('get_screenshot', { nodeIds: [nodeId], format: 'PNG', scale });
    if (res.result && res.result.images && res.result.images[0] && res.result.images[0].base64) {
      const buf = Buffer.from(res.result.images[0].base64, 'base64');
      fs.writeFileSync(path.join(outDir, fileName), buf);
      console.log(`✓ Exported ${fileName} (${buf.length} bytes)`);
      return true;
    } else {
      console.error(`✗ Export failed for ${fileName}:`, res.result || res);
    }
  } catch (err) {
    console.error(`✗ Error exporting ${fileName}:`, err.message);
  }
  return false;
}

async function main() {
  console.log('Extracting isolated image sources...');

  // 1. Clean hero bus background (Group 1574:3049) - contains the coach bus, palms, and skyline without text or navbar!
  await exportNode('1574:3049', 'hero-bus-clean.png', 1.5);

  // 2. Ticket banner bus photo (Rectangle 6 1574:3259)
  await exportNode('1574:3259', 'ticket-bus-clean.png', 2);

  // 3. Kaaba and Madinah photos for Makkah packages (1884:260 and 1884:262)
  await exportNode('1884:260', 'makkah-kaaba.png', 2);
  await exportNode('1884:262', 'madinah-mosque.png', 2);

  // 4. Payment logos from Footer
  // Visa: I2035:1798;2136:1848
  // Mada: I2035:1798;2136:1868
  // Mastercard: I2035:1798;2136:1850
  // Apple Pay: I2035:1798;2136:1852
  // STC Pay: I2035:1798;2136:1859
  // Google Pay: I2035:1798;2136:1855
  // Samsung Pay: I2035:1798;2136:1857
  const paymentNodes = [
    { id: 'I2035:1798;2136:1848', name: 'pay-visa.png' },
    { id: 'I2035:1798;2136:1868', name: 'pay-mada.png' },
    { id: 'I2035:1798;2136:1850', name: 'pay-mastercard.png' },
    { id: 'I2035:1798;2136:1852', name: 'pay-applepay.png' },
    { id: 'I2035:1798;2136:1859', name: 'pay-stcpay.png' },
    { id: 'I2035:1798;2136:1855', name: 'pay-googlepay.png' },
    { id: 'I2035:1798;2136:1857', name: 'pay-samsungpay.png' },
  ];

  for (const p of paymentNodes) {
    await exportNode(p.id, p.name, 2);
  }

  // 5. Operator Buses photo (Background+Shadow image fill from 1574:3250)
  // Let's also export the isolated buses from 1574:3250
  await exportNode('1574:3250', 'operator-buses.png', 2);

  console.log('All isolated assets extracted!');
}

main().catch(console.error);
