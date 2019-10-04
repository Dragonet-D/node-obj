const http = require("http");

class Kob {
  listen(...args) {
    http
      .createServer((req, res) => {
        this.callback(req, res);
      })
      .listen(...args);
  }
  use(callback) {
    this.callback = callback;
  }
}

module.exports = Kob;
