const geekTime = require('./lib')

geekTime.addListener('new lesson', (res) => {
  if (res.price < 80) {
    console.log('yeah!', res);
  }
})