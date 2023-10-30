const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URL = process.env.MONGODB_ATLAS_URI;

const dbConnection = mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Successfully connected to MongoDB database");
  })
  .catch((error) => {
    console.log(`Error connecting to MongoDB:-> ${error.message}`);
  });

module.exports = dbConnection;
