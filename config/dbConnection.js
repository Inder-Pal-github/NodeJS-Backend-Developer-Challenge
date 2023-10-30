const mongoose = require("mongoose");

const MONGODB_URL =
  process.env.MONGODB_ATLAS_URI ||
  "mongodb://127.0.0.1:27017/backend_developer_challenge";

const dbConnection = mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Successfully connected to MongoDB database");
  })
  .catch((error) => {
    console.log(`Error connecting to MongoDB:-> ${error.message}`);
  });

module.exports = dbConnection;
