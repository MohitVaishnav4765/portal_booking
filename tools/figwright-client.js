const http = require('http');
const { encode, decode } = require('/Users/waseemakram/.nvm/versions/node/v24.20.0/lib/node_modules/@figwright/mcp/node_modules/@msgpack/msgpack');

async function callTool(toolName, args = {}) {
  const payload = {
    requestId: 'req_' + Date.now(),
    toolName,
    args,
  };

  const encoded = encode(payload);

  return new Promise((resolve, reject) => {
    const req = http.request(
      'http://127.0.0.1:3055/rpc',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/msgpack',
          'Content-Length': encoded.length,
        },
      },
      (res) => {
        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => {
          const buffer = Buffer.concat(chunks);
          try {
            const decoded = decode(buffer);
            resolve(decoded);
          } catch (err) {
            resolve({ raw: buffer.toString(), status: res.statusCode });
          }
        });
      }
    );

    req.on('error', reject);
    req.write(encoded);
    req.end();
  });
}

const tool = process.argv[2] || 'get_selection';
const args = process.argv[3] ? JSON.parse(process.argv[3]) : {};

callTool(tool, args)
  .then((res) => console.log(JSON.stringify(res, null, 2)))
  .catch((err) => console.error('Error:', err.message));
