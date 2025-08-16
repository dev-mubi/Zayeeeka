// models/Portfolio.js
const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    ip: {
      type: String, // request IP
    },
    userAgent: {
      type: String, // browser / device info
    },
  },
  {
    timestamps: true, // auto-creates createdAt & updatedAt
  }
);

module.exports = mongoose.model("portfolio", portfolioSchema);
