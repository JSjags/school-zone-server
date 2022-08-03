// importing modules
const express = require("express");
const env = require("dotenv");
const colors = require("colors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

// importing custom middleware
const { errorHandler } = require("./middlewares/errorHandler");

env.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/schools", require("./routes/schoolRoutes"));
app.use(errorHandler);

mongoose
  .connect(process.env.MONGODB_URI)
  .then((conn) => {
    // check node_env
    process.env.NODE_ENV === "development" &&
      console.log(`${process.env.NODE_ENV}`.yellow.underline);

    console.log(`Connected To Database: ${conn.connection.host}`.bgWhite.green);

    // listen for requests after connecting to database
    app.listen(PORT, () => {
      console.log(`Listening to requests on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);

    process.exit(1);
  });
