const http= require('http');
const port = 3001;
const host = 'localhost';

const server=http.createServer((req, res) => {
  res.statusCode= 200;
  res.sertHeader('Content-Type','text/plain');
  res.end('Hello patron');
});
server.listen(port,host, ()=> {
  console.log(`Server running on port: ${port}`);
});