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

const mainSections = [
  { id: '1150:665', name: 'Website (English)' },
  { id: '2349:3291', name: 'Website (Arabic)' },
  { id: '664:2490', name: 'Ticket Booking Flow' },
  { id: '891:1928', name: 'Customer Portal' },
  { id: '840:2519', name: 'Operator Portal' },
  { id: '602:23307', name: 'Admin Portal' },
];

async function run() {
  console.log('Discovering screens in all main sections...');
  const allScreens = [];

  for (const sec of mainSections) {
    console.log(`\nSearching in ${sec.name} (${sec.id})...`);
    const res = await callTool('search_nodes', { root: sec.id, type: 'FRAME' });
    const frames = (res.result && res.result.nodes) || [];
    
    // Filter for actual page/screen-level frames (typically width >= 1000 or height >= 600, or direct screen containers)
    const screens = frames.filter(f => {
      // Must be big enough to be a screen or major modal
      const isScreenSize = (f.width >= 1000 && f.height >= 500) || (f.width >= 350 && f.height >= 700);
      // Skip generic layouts if they are subcomponents
      return isScreenSize;
    });

    console.log(`  Found ${frames.length} total frames, ${screens.length} screen-sized frames:`);
    for (const s of screens) {
      console.log(`    - [${s.id}] "${s.name}" (${Math.round(s.width)}x${Math.round(s.height)}, parent: ${s.parentId})`);
      allScreens.push({ section: sec.name, sectionId: sec.id, ...s });
    }
  }

  const fs = require('fs');
  fs.writeFileSync('tools/screens-inventory.json', JSON.stringify(allScreens, null, 2));
  console.log(`\nInventory saved to tools/screens-inventory.json (${allScreens.length} total screens)`);
}

run().catch(console.error);
