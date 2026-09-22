const http = require('http');
const fs = require('fs');
const path = require('path');
const { encode, decode } = require('/Users/waseemakram/.nvm/versions/node/v24.20.0/lib/node_modules/@figwright/mcp/node_modules/@msgpack/msgpack');

const publicCapturesDir = path.join(__dirname, '../apps/customer-web/public/captures');
const artifactCapturesDir = '/Users/waseemakram/.gemini/antigravity/brain/76355e1e-da69-4752-8fbf-6eec50897edf/captures';

fs.mkdirSync(publicCapturesDir, { recursive: true });
fs.mkdirSync(artifactCapturesDir, { recursive: true });

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

async function captureScreen(nodeId, filename, label) {
  process.stdout.write(`Capturing [${nodeId}] ${label} -> ${filename}... `);
  try {
    const res = await callTool('get_screenshot', { nodeIds: [nodeId], format: 'PNG' });
    if (res.result && res.result.images && res.result.images[0] && res.result.images[0].base64) {
      const buf = Buffer.from(res.result.images[0].base64, 'base64');
      fs.writeFileSync(path.join(publicCapturesDir, filename), buf);
      fs.writeFileSync(path.join(artifactCapturesDir, filename), buf);
      console.log(`✓ (${buf.length} bytes, ${res.result.images[0].width}x${res.result.images[0].height})`);
      return { success: true, width: res.result.images[0].width, height: res.result.images[0].height, size: buf.length };
    } else {
      console.log(`✗ No image data returned:`, res.result || res);
      return { success: false };
    }
  } catch (err) {
    console.log(`✗ Error: ${err.message}`);
    return { success: false, error: err.message };
  }
}

// Master list of key screens across all 3 portals + booking flow
const screensToCapture = [
  // --- 1. Customer Web (English & Arabic) ---
  { id: '1574:3044', file: 'cust-web-home-en.png', portal: 'Customer Web', title: 'Customer Home Page (English)' },
  { id: '2337:4703', file: 'cust-web-home-ar.png', portal: 'Customer Web', title: 'Customer Home Page (Arabic RTL)' },
  { id: '1945:2373', file: 'cust-web-search-results.png', portal: 'Customer Web', title: 'Bus Search & Results Listing' },
  { id: '1945:2716', file: 'cust-web-seat-selection.png', portal: 'Customer Web', title: 'Interactive Seat Selection & Bus Map' },
  { id: '1572:962', file: 'cust-web-checkout-payment.png', portal: 'Customer Web', title: 'Checkout & Payment Method Selection' },
  { id: '1893:252', file: 'cust-web-ticket-confirmation.png', portal: 'Customer Web', title: 'Booking Confirmation & Digital Ticket' },
  { id: '1572:1420', file: 'cust-web-cash-payment-instructions.png', portal: 'Customer Web', title: 'Cash Payment / SADAD Instructions' },
  { id: '1808:150', file: 'cust-web-email-otp-verification.png', portal: 'Customer Web', title: 'Passenger Email / OTP Verification Modal' },

  // --- 2. Customer Portal (My Account) ---
  { id: '891:2695', file: 'cust-portal-dashboard.png', portal: 'Customer Portal', title: 'Customer Account Dashboard' },
  { id: '891:2213', file: 'cust-portal-saved-passengers.png', portal: 'Customer Portal', title: 'Saved Passenger Profiles' },
  { id: '891:1929', file: 'cust-portal-transaction-history.png', portal: 'Customer Portal', title: 'Transaction & Booking History' },
  { id: '891:3875', file: 'cust-portal-profile.png', portal: 'Customer Portal', title: 'User Profile & Preferences' },
  { id: '1574:3043', file: 'cust-portal-support.png', portal: 'Customer Portal', title: 'Customer Support & Help Center' },
  { id: '1574:2649', file: 'cust-portal-trip-review.png', portal: 'Customer Portal', title: 'Trip Review & Rating Dialog' },

  // --- 3. Bus Operator Portal ---
  { id: '840:4003', file: 'operator-dashboard.png', portal: 'Operator Portal', title: 'Operator Command Center & Financial Overview' },
  { id: '840:2521', file: 'operator-company-profile.png', portal: 'Operator Portal', title: 'Operator Company Profile & Documentation' },
  { id: '840:4002', file: 'operator-bus-management.png', portal: 'Operator Portal', title: 'Bus Fleet & Inventory Management' },
  { id: '840:4880', file: 'operator-routes-management.png', portal: 'Operator Portal', title: 'Route Configuration & Management' },
  { id: '840:7138', file: 'operator-trips-management.png', portal: 'Operator Portal', title: 'Trip Scheduling & Dispatch' },
  { id: '840:8327', file: 'operator-passenger-manifest.png', portal: 'Operator Portal', title: 'Passenger Manifest & Boarding List' },
  { id: '1546:2741', file: 'operator-payouts-settlements.png', portal: 'Operator Portal', title: 'Operator Payouts & Settlement Hub' },

  // --- 4. Admin Web Portal ---
  { id: '602:21690', file: 'admin-dashboard.png', portal: 'Admin Portal', title: 'Super Admin Central Dashboard' },
  { id: '602:6205', file: 'admin-customer-management.png', portal: 'Admin Portal', title: 'Global Customer Management' },
  { id: '602:15001', file: 'admin-bookings-management.png', portal: 'Admin Portal', title: 'Central Booking Control & Management' },
  { id: '602:20914', file: 'admin-payout-configuration.png', portal: 'Admin Portal', title: 'Payout & Commission Engine Configuration' },
  { id: '602:21126', file: 'admin-payout-status-reference.png', portal: 'Admin Portal', title: 'Payout Status Reference Matrix' },
  { id: '1483:229', file: 'admin-bank-transfer-config.png', portal: 'Admin Portal', title: 'Bank Transfer & Wire Instructions Setup' },
  { id: '1502:2', file: 'admin-platform-settings.png', portal: 'Admin Portal', title: 'System-Wide Platform Settings & Limits' },
  { id: '1574:2785', file: 'admin-review-moderation.png', portal: 'Admin Portal', title: 'Review Moderation & Feedback Management' },
  { id: '602:22645', file: 'admin-reports-analytics.png', portal: 'Admin Portal', title: 'Revenue & Volume Reports Analytics' },
];

async function run() {
  console.log(`Starting master capture of ${screensToCapture.length} key screens from Figma...`);
  const manifest = [];

  for (const item of screensToCapture) {
    const res = await captureScreen(item.id, item.file, item.title);
    manifest.push({ ...item, ...res });
  }

  // Also fetch and dump design tokens (styles)
  console.log('\nFetching design tokens (styles)...');
  const styles = await callTool('get_styles');
  const stylesPath = path.join(__dirname, 'figma-styles.json');
  fs.writeFileSync(stylesPath, JSON.stringify(styles.result || styles, null, 2));
  console.log(`✓ Saved styles to ${stylesPath}`);

  // Save capture manifest
  const manifestPath = path.join(__dirname, 'capture-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`✓ Saved manifest to ${manifestPath}`);

  console.log('\nAll captures completed successfully!');
}

run().catch(console.error);
