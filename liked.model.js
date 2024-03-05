const db = require("./db");
db.connect();

const { default: mongoose } = require("mongoose");

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  video_id: {
    type: String,
    unique: true,
    required: true,
  },
  thumbnails: {
    type: String
  }
});

const songModel = mongoose.model("song", songSchema);

module.exports = songModel;