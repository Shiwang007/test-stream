// models/StringData.js
const mongoose = require("mongoose");

const livestreamDataSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("livestream", livestreamDataSchema);
