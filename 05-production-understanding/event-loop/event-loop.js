const http = require('node:http');

const server = http.createServer((req, res) => {
  if (req.url === '/block') {
    console.log('Starting heavy computation...');
    
    // Simulate a CPU-bound task that blocks the single thread
    const start = Date.now();
    while (Date.now() - start < 5000) {
      // Busy-wait for 5 seconds
    }
    
    console.log('Heavy computation finished.');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('Heavy task completed\n');
  }

  if (req.url === '/ping') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('Pong!\n');
  }

  res.writeHead(404);
  res.end();
});

server.listen(3001, () => {
  console.log('Server listening on http://localhost:3001');
});
