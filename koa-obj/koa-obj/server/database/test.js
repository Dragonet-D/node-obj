const mongoose = require("mongoose");
const db = "mongodb://localhost/douban-trailer";
mongoose.Promise = global.Promise;
mongoose.connect(db);
mongoose.connection('disconnected', () => {
  mongoose.connect(db);
})
mongoose.connection('error', err => {
  console.log(err);
  mongoose.connect(db);
})
mongoose.connection('open', () => {
  console.log("Mongodb connected successfully!");
  mongoose.connect(db);
})