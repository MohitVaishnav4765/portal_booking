const fs = require('fs');
const screens = JSON.parse(fs.readFileSync('tools/figma-screens-all.json', 'utf8'));

console.log(`Total captured screens: ${screens.length}`);

// Group by name patterns or size
const categories = {
  customerWeb: [],
  customerPortal: [],
  operatorPortal: [],
  adminPortal: [],
  authAndModals: [],
  other: [],
};

for (const s of screens) {
  const name = s.name.toLowerCase();
  if (name.includes('admin') || name.includes('payout status') || name.includes('commission')) {
    categories.adminPortal.push(s);
  } else if (name.includes('operator') || name.includes('manifest') || name.includes('recoveries')) {
    categories.operatorPortal.push(s);
  } else if (name.includes('home page') || name.includes('search') || name.includes('booking') || name.includes('ticket card')) {
    categories.customerWeb.push(s);
  } else if (name.includes('dashboard') || name.includes('profile') || name.includes('passenger') || name.includes('wallet') || name.includes('history') || name.includes('support')) {
    categories.customerPortal.push(s);
  } else if (name.includes('login') || name.includes('verification') || name.includes('modal') || name.includes('dialog')) {
    categories.authAndModals.push(s);
  } else {
    categories.other.push(s);
  }
}

console.log('\n--- CATEGORY BREAKDOWN ---');
for (const [cat, list] of Object.entries(categories)) {
  console.log(`\n### ${cat.toUpperCase()} (${list.length} screens):`);
  for (const s of list) {
    console.log(`  - [${s.id}] "${s.name}" (${Math.round(s.width)}x${Math.round(s.height)})`);
  }
}
