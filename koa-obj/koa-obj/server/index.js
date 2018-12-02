const Koa = require("koa");
const app = new Koa();

app.use(ctx => {
  ctx.body = "电影首页"
});

app.listen(3000);