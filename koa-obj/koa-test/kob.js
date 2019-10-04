const http = require('http');

class Kob = {
  listen(...args) {
    http.createServer((req, res) => {
      res.writeHead(200);
      res.end('hi kob');
    }).listen(...args);
  };
  use() {};
}