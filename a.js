const express = require("express");

const app = new express();
app.set("view engine", "ejs");

// 配置public目录为静态资源目录
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/login", (req, res) => {
  res.render("login");
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