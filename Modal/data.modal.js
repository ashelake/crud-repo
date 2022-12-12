const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema({
  title: String,
  status: String,
  tags: String,
  userID: String,
});

const DataModal = mongoose.model("crud-data", DataSchema);

module.exports = DataModal;
