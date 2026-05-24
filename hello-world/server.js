'use strict';
const http = require('http');
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ ok: true, message: 'Hello from smoke-test!' }));
}).listen(PORT, () => console.log(`Listening on ${PORT}`));
