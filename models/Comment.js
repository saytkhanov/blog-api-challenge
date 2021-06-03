const mongoose = require("mongoose");

const Comment = new mongoose.Schema({
  firstName: { type: String, required: true },
  text: { type: String, required: true },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "post" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("comment", Comment);
