const fs = require("fs");
const util = require("util");
const path = require("path");

const packagePath = path.join(__dirname, "./../package.json");
// 第一阶段
function readFile(cb) {
  fs.readFile(packagePath, (err, data) => {
    if (err) return cb(err);
    cb(null, data);
  })
}

readFile((err, data) => {
  if (!err) {
    data = JSON.parse(data);
    console.log(data);
  }
});

const readAsync = util.promisify(fs.readFile);

async function init() {
  let data = await readAsync(packagePath);
  data = JSON.parse(data);
  console.log(data);
}

init();