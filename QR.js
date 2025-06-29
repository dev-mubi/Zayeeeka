const mongoose = require("mongoose");

const QRSchema = new mongoose.Schema({
  orderId: String,
  mess: String,
  date: String,
  dish: String,
  generatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("generated_qrs", QRSchema);
