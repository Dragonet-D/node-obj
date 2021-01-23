const glob = require('glob')

// const res = glob.sync(__dirname + '/**/*')

// console.log(res);

glob(__dirname + '/**/*', function (err, res) {
  console.log(res);
})