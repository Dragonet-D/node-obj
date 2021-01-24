const express = require('express')

const app = express()

app.get('./favicon.ico', function (req, res) {
  res.writeHead(200)
  res.end()
})

app.get('/', function (req, res) {
  res.writeHead(200)
})


app.listen(300)