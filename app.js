const express = require("express");
const dbConnection = require("./config/dbConnection"); // Database Connection
const bookRouter = require("./routes/book.routes");
require("dotenv").config();

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  openapi:"3.0.0",
  info:{
    title:"RESTful API using Node.js for managing books.",
    version:"1.0.0",
  }
}
const options = {
  swaggerDefinition,
  apis:["./routes/*routes.js"]
}

const swaggerSpec = swaggerJSDoc(options);

const app = express();

const PORT = process.env.PORT || 8080;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// swagger documentation
app.use("/docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec));

// book router
app.use("/api/v1", bookRouter);

app.get("*", (req, res, next) => {
    const status = 404;
    const message = "API endpoint you are trying to access does not exist.";
    const error = new Error(message);
    error.status = status;
    next(error);
  });

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong.";
  console.log(status);
  res.status(status).json({ success: false, message });
});

app.listen(PORT, () => {
  try {
    console.log(`Listening on http://localhost:${PORT}`);
  } catch (error) {
    console.log(`Failed to listen`);
  }
});
