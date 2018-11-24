const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const DBUrl = "mongodb://localhost:27018";
const app = new express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set("view engine", "ejs");

// 配置public目录为静态资源目录
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/doLogin", (req, res) => {
  const { username, password } = req.body;
  // 获取数据 连接数据库查询数据
  MongoClient.connect(DBUrl, {useNewUrlParser: true}, (err, db) => {
    if (err) throw err;
    // 查询数据
    const dbo = db.db("productmanage");
    dbo.collection("user").find({username, password}).toArray((error, result) => {
      console.log(result);
      if (result.length) {
        res.redirect('/product');
      } else {
        res.send('<script>location.href="/login"</script>')
      }
      db.close();
    })
  });
});

app.get("/product", (req, res) => {
  res.render("product");
});

app.get("/productadd", (req, res) => {
  res.render("productadd");
});

app.get("/productedit", (req, res) => {
  res.render("productedit");
});

app.listen(3000, "localhost");