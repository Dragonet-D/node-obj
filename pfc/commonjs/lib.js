console.log('lib');

exports.hello = 'world'
exports.add = (a, b) => {
  return a + b
}

exports.geekbang = {
  hello: 'world'
}

setTimeout(() => {
  console.log(exports);
}, [])

module.exports = function () {}