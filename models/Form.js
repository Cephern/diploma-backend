const mongoose = require("mongoose");

const form = new mongoose.Schema({
  fio: String,
  doctor: String,
  answers: Array,
  diagnosis: String,
});

module.exports = mongoose.model("Form", form);
