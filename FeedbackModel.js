const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  orderId: { type: String, unique: true },
  mess: String,
  date: String,
  rating: String,
  comment: String,
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("feedbacks", FeedbackSchema);
