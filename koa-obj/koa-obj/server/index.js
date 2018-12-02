const Koa = require("koa");
const views = require("koa-views");
const { resolve }  = require("path");
const { connect } = require("./database/init");

(async () => {
  await connect();
})();

const app = new Koa();

app.use(async ctx => {
  ctx.body = "hello koa";
});

app.listen(3001);