const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const YogaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Yoga", YogaSchema);