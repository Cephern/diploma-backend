const mongoose = require("mongoose");

const review = new mongoose.Schema(
  {
    reviewer: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", review);
