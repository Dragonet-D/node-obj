const fs = require("fs");
const path = require("path");
const util = require("util");
// fs.readFile(path.join(__dirname, "./../package.json"), (err, data) => {
//   if (err) throw err;
//   const dataa = JSON.parse(data);
//   console.log(dataa);
// });

function readFileAsync(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) throw reject(err);
      const dataa = JSON.parse(data);
      resolve(dataa);
    });
  })
}

// readFileAsync(path.join(__dirname, "./../package.json")).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });

util.promisify(fs.readFile)(path.join(__dirname, "./../package.json")).then(JSON.parse).then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
});