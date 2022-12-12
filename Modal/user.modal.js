const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const UserModal = mongoose.model("crud-user", UserSchema);

module.exports = UserModal;
