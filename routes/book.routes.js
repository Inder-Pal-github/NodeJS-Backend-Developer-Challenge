const { Router } = require("express");
const {
  getBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/books.controller");

const bookRouter = Router();

bookRouter.post("/book/new", createBook);
bookRouter.get("/books", getBooks);
bookRouter.get("/book/:id", getBookById);
bookRouter.patch("/book/:id", updateBook);
bookRouter.delete("/book/:id", deleteBook);

module.exports = bookRouter;
