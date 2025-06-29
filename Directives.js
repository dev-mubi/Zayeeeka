const mongoose = require("mongoose");

const Scheme = new mongoose.Schema({
  text: String,
});
module.exports = mongoose.model("directives", Scheme);
