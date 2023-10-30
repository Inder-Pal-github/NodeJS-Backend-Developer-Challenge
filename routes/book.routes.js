const { Router } = require("express");
const {
  getBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/books.controller");

const bookRouter = Router();


// defined schemas
/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The auto generated id of the book.
 *         title:
 *           type: string
 *           description: The title of the book.
 *         author:
 *           type: string
 *           description: The author of the book.
 *         summary:
 *           type: string
 *           description: The summary of the book.
 *         createdAt:
 *           type: date
 *           description: The auto generated createdAt date of the book.
 *         updatedAt:
 *           type: date
 *           description: The auto generated updatedAt date of the book.
 */

// defined tags
/**
 * @swagger
 * tags:
 *   name: Books
 *   description: All the API routes related to Books.
 */

// swagger docs for get all books
/**
 * @swagger
 * /api/v1/books:
 *   get:
 *       summary: This will get all the books data from the database
 *       tags:
 *           - Books
 *       parameters:
 *           - in: query
 *             name: page
 *             schema:
 *                 type: integer
 *             description: Page number for pagination ( By default = 1 )
 *           - in: query
 *             name: limit
 *             schema:
 *               type: integer
 *             description: The number of items to return ( By default = 5 ).
 *           - in: query
 *             name: sort
 *             schema:
 *               type: string
 *             description: The order in which we want to sorted by the time of create/update ( By default = desc ).
 *       responses:
 *           200:
 *               description: The list of all the users
 *               content:
 *                   application/json:
 *                       schema:
 *                           type: array
 *                           item:
 *                               $ref: "#/components/schemas/Book"
 *
 */

// swagger docs for getting book by id
/**
 * @swagger
 * /api/v1/book/{id}:
 *   get:
 *       summary: This will get the single book data from the database
 *       tags:
 *           - Books
 *       parameters:
 *           - in: path
 *             name: id
 *             schema:
 *                 type: string
 *             required: true
 *             description: ID of the document to retreive.
 *       responses:
 *           200:
 *               description: The data of book with the given id
 *               content:
 *                   application/json:
 *                       schema:
 *                           type: object
 *                           item:
 *                               $ref: "#/components/schemas/Book"
 *
 */

// swagger docs for adding new book
/**
 * @swagger
 * /api/v1/book/new:
 *   post:
 *     summary: To post the details of a new book.
 *     tags:
 *       - Books
 *     requestBody:
 *       description: Book data to be created, remove id, createdAt and updatedAt fields as they will be autogeneerated.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               summary:
 *                 type: string
 *
 *     responses:
 *       201:
 *         description: The book is created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Book"
 */

// swagger docs for updating a book
/**
 * @swagger
 * /api/v1/book/{id}:
 *   patch:
 *     summary: It will update the book details
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               summary:
 *                 type: string
 *     responses:
 *       200:
 *         description: Book with given id is updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Book"
 *       400:
 *         description: The book was not found.
 *       500:
 *         description: Internal Server Error.
 */

// swagger docs for delete a book
/**
 * @swagger
 * /api/v1/book/{id}:
 *   delete:
 *     summary: Remove the book by id
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id to delete
 *     responses:
 *       200:
 *         description: Book with given id is deleted successfully.
 *       404:
 *         description: Book with given id is not found.
 *       500:
 *         description: Internal Server Error
 */

bookRouter.post("/book/new", createBook);
bookRouter.get("/books", getBooks);
bookRouter.get("/book/:id", getBookById);
bookRouter.patch("/book/:id", updateBook);
bookRouter.delete("/book/:id", deleteBook);

module.exports = bookRouter;
