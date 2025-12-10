// Simple static server for viewing HTML reports
const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = 8080;
const REPORTS_DIR = path.join(__dirname, 'reports', 'html');

const server = http.createServer((req, res) => {
  let filePath = path.join(REPORTS_DIR, req.url === '/' ? 'index.html' : req.url);
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
