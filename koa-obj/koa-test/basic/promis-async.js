const fs = require("fs");
const util = require("util");
const path = require("path");
const readAsync = util.promisify(fs.readFile);

async function init() {
  try {
    let data = await readAsync(path.join(__dirname, "./../package.json"));
    console.log(JSON.parse(data));
  } catch (e) {
    console.log(e);
  }
}

init();