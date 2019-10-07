const http = require('http');
const context = require('./context');
const request = require('./request');
const response = require('./response');

class Kob {
  constructor() {
    this.middlewares = [];
  }

  listen(..args) {
    http
    .createServer(async (req, res) => {
      // 创建上下文对象
      const ctx = this.createContext(req, res);
      // 将中间件变成一个
      const fn = this.compose(this.middlewares)
      await fn(ctx)
      res.end(ctx.body)
    })
    .listen(...args);
  }
  use(mid) {
    this.middlewares.push(mid);
  }
  
}
