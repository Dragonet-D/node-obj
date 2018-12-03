const mongoose = require("mongoose");
const db = "mongodb://localhost/douban-trailer";
mongoose.Promise = global.Promise;

exports.connect = () => {
  let maxConnectTimes = 0;
  return new Promise((resolve, reject) => {
    if (process.env.NODE_ENV !== "production") {
      mongoose.set('debug', true)
    }
    mongoose.connect(db);

    mongoose.connection.on('disconnected', () => {
      maxConnectTimes++;
      if (maxConnectTimes < 5) {
        mongoose.connect(db);
      } else {
        throw new Error("数据库挂了")
      }
    });

    mongoose.connection.on('error', err => {
      maxConnectTimes++;
      if (maxConnectTimes < 5) {
        mongoose.connect(db);
      } else {
        throw new Error("数据库挂了")
      }
    });

    mongoose.connection.on('open', () => {
      const Dog = mongoose.model("Dog", {
        name: String
      });
      const dogss = new Dog({ name: "maomoagou" });
      dogss.save().then(() => {
        console.log("waowang");
      });
      console.log("Mongodb connected successfully!");
      resolve()
    })
  })
};
