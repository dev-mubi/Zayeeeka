const mongoose = require("mongoose");

const food_items_schema = mongoose.Schema({
  name: String,
  carbs: Number,
  protein: Number,
  fat: Number,
  calories: Number,
  category: String,
  imageUrl: String, // ✅ Image stored as URL now
});

module.exports = mongoose.model("Food_items", food_items_schema, "Food-items");
