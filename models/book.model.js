const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    summary: { type: String, required: true },
  },
  { timestamps: true }
);

const BookModel = mongoose.model("book", bookSchema);

module.exports = BookModel;
