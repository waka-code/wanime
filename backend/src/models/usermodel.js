const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

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

userDataSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("userData", userDataSchema);