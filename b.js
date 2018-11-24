const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const DBUrl = "mongodb://localhost:27018";

const app = new express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.end("hello express");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/product", (req, res) => {
  res.render("product");
});

app.post("/doLogin", (req, res) => {
  const { username, password } = req.body;
  MongoClient.connect(DBUrl, {useNewUrlParser: true}, (err, db) => {
    if (err) throw err;
    const dbo = db.db("productmanage");
    dbo.collection("user").find({username, password}).toArray((error, result) => {
      if (result.length) {
        res.redirect("/product");
      } else {
        res.send('<script>location.href="/login"</script>')
      }
      db.close();
    })
  });
});

app.listen(3000, "localhost");
