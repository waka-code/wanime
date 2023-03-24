const mongoose = require("mongoose");

const userDataSchema = mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  user: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("userData", userDataSchema);