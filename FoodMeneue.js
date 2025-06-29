const mongoose = require("mongoose");
const meneuschema = new mongoose.Schema({
  mess: String,
  date: String,
  breakfast: [],
  lunch: [],
  Dinner: [],
});

module.exports = mongoose.model("menu", meneuschema, "Menu");
