import http from 'http';

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello Beer!');
});

server.listen(process.env.PORT || 8000);

console.log('Server running at http://localhost:%d', process.env.PORT || 8000);
