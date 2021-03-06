const mongoose = require("mongoose");

const user = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  fio: String,
  password: String,
  isDoctor: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", user);
