const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

const root = {
  hello: () => {
    return 'Hello World!'
  }
}

module.exports = function (query) {
  return graphql(schema, query, root).then(res => {
    return res
  })
}