const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const dataUser = require("./routes/userRoute");
const cors = require("cors");

// settings
const app = express();
const port = process.env.PORT || 8000;
const settingsTwoe = [
  `http://localhost:3000/`,
  `http://localhost:8000/createUser/userData`,
];

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/createUser", dataUser);
app.use(
  cors({
    originTwo: settingsTwoe,
  })
);

// routes
app.get("/", (req, res) => {
    res.send("Welcome to my API Create");
  });
  
  // mongodb connection
  mongoose
    .connect(process.env.MONGODBURL)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));
  
  // server listening
  app.listen(port, () => console.log("Server listening to", port));
  