const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("data", userSchema);
