const mongoose = require("mongoose");
const Scheme = mongoose.Schema;
const Mixed = Scheme.Types.Mixed;

const MovieScheme = new Scheme({
  doubanId: String,
  rate: Number,
  title: String,
  video: String,
  poster: String,
  cover: String,
  videoKey: String,
  posterKey: String,
  coverKey: String,
  rawTitle: String,
  movieTypes: String,
  pubdate: Mixed,
  year: Number,
  tags: Array,
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
   updateAt: {
      type: Date,
      default: Date.now()
    }
  }
});

mongoose.model("Movie", MovieScheme);