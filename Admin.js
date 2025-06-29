const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  name: String,
  email: String,
  mess: String,
});
module.exports = mongoose.model("admin_auth", AdminSchema);
