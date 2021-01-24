const app = new (require('koa'))
const graphqlKoa = require('koa-graphql')

app.use(
    graphqlKoa({
      schema: require('./schema1')
    })
)

app.listen(3000)
