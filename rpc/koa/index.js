const koa = require('koa')
const mount = require('koa-mount')

const app = new koa()

app.use(mount('/favicon.ico'), function (ctx) {
  ctx.status = 200
})

app.use(mount('/game', function () {

}))

app.use(mount('/', function (ctx) {
  ctx.body = ''
}))
