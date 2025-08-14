const mongoose = require("mongoose");

const StudentView = new mongoose.Schema(
  {
    ip: {
      type: String,
      required: true,
    },
    userAgent: {
      type: String,
      required: true,
    },
    locationHint: {
      type: String,
      default: "Unknown",
    },
    endpoint: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

module.exports = mongoose.model("logs", StudentView);
