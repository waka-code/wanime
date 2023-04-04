const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const dataRoute = require("./routes/routedata");
const cors = require("cors");

// settings
const app = express();
const port = process.env.PORT || 9000;
const settings = [`http://localhost:3000/`, `http://localhost:9000/api/data`];

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", dataRoute);
app.use(
  cors({
    origin: settings,
  })
);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});


// mongodb connection
mongoose
  .connect(process.env.MONGODBURL)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));
  

// server listening
app.listen(port, () => console.log("Server listening to", port));
