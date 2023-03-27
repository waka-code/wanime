const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

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
  },
});

userSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("data", userSchema);
