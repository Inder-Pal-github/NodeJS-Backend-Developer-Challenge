const BookModel = require("../models/book.model");

module.exports = {
  createBook: async (req, res, next) => {
    try {
      const { title, author, summary } = req.body;
      const newBook = await BookModel.create({
        title,
        author,
        summary,
      });

      res.status(201).json({
        success: true,
        message: "New Book added successfully",
        book: newBook,
      });
    } catch (error) {
      next(error);
    }
  },
  getBooks: async (req, res, next) => {
    try {
      const { page = 1, limit = 5, sort = "desc" } = req.query;
      const books = await BookModel.find()
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ updatedAt: sort });
      res.status(200).json({
        success: true,
        message: "All books fetched successfully",
        books,
      });
    } catch (error) {
      next(error);
    }
  },
  getBookById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const book = await BookModel.findById(id);

      if (!book) {
        throw new Error("Book not found");
      }

      res.status(200).json({
        success: true,
        message: `Successfully fetched book details with id: ${id}`,
        book,
      });
    } catch (error) {
      next(error);
    }
  },
  updateBook: async (req, res, next) => {
    try {
      const updates = req.body;
      const { id } = req.params;
      const updatedBook = await BookModel.findByIdAndUpdate(
        id,
        { $set: updates },
        { new: true }
      );

      if (!updatedBook) {
        throw new Error("Book not found");
      }
      res.status(200).json({
        success: true,
        message: `Successfully updated book with id: ${id}`,
        book: updatedBook,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteBook: async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleteBook = await BookModel.findByIdAndDelete(id);

      if (!deleteBook) {
        throw new Error("Book not found");
      }
      res.status(200).json({
        success: true,
        message: `Successfully deleted book with id: ${id}`,
        book: deleteBook,
      });
    } catch (error) {
      next(error);
    }
  },
};
