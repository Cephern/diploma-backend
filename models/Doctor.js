const mongoose = require("mongoose");

const doctor = mongoose.Schema({
  name: String,
  desc: String,
  likes: Number,
  img: String,
});

module.exports = mongoose.model("Doctor", doctor);
