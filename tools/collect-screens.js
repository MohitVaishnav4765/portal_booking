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

const searchTerms = [
  'home', 'search', 'seat', 'ticket', 'booking',
  'dashboard', 'admin', 'operator', 'profile', 'payout',
  'passenger', 'bus', 'trip', 'payment', 'report',
  'login', 'history', 'support', 'wallet', 'verification',
  'package', 'amenities', 'manifest', 'setting'
];

async function collectAllScreens() {
  console.log('Collecting all screens and major views from Figma...');
  const screenMap = new Map();

  for (const term of searchTerms) {
    process.stdout.write(`Searching "${term}"... `);
    try {
      const res = await callTool('search_nodes', { name: term });
      const nodes = (res.result && res.result.nodes) || [];
      let count = 0;
      for (const n of nodes) {
        if (n.type === 'FRAME' || n.type === 'SECTION') {
          // Identify if it's a full screen or a major functional container
          const isFullScreen = (n.width >= 1000 && n.height >= 500);
          const isMobileOrModal = (n.width >= 320 && n.width <= 900 && n.height >= 400);
          if (isFullScreen || isMobileOrModal) {
            if (!screenMap.has(n.id)) {
              screenMap.set(n.id, n);
              count++;
            }
          }
        }
      }
      console.log(`+${count} new views (found ${nodes.length} nodes)`);
    } catch (err) {
      console.log(`error: ${err.message}`);
    }
  }

  const allScreens = Array.from(screenMap.values());
  console.log(`\nTotal unique screens/views collected: ${allScreens.length}`);

  // Sort by width descending, then name
  allScreens.sort((a, b) => b.width - a.width);

  const outputPath = path.join(__dirname, 'figma-screens-all.json');
  fs.writeFileSync(outputPath, JSON.stringify(allScreens, null, 2));
  console.log(`Saved screen metadata to ${outputPath}`);
  return allScreens;
}

collectAllScreens().catch(console.error);
