const originRequest = require("request");
// 类似服务端的jquery
const cheerio = require("cheerio");
// 解码
const iconv = require("iconv-lite");

function request(url, cb) {
  const options = {
    url,
    encoding: null // 返回Buffer数据
  };
  originRequest(url, options, cb);
}

for (let i = 100553; i < 100663; i++) {
  const url = `https://www.dy2018.com/i/${i}.html`;
  request(url, function (err, res, body) {
    const html = iconv.decode(body, "gb2312");
    const $ = cheerio.load(html);
    console.log($(".title_all h1").text());
  })
}