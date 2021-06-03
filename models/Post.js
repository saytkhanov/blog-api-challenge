const { Schema, model } = require("mongoose");
const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    ref: "category",
    type: Schema.Types.ObjectId,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = model("post", schema);
