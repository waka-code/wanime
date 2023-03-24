const express = require("express");
const userDataSchema = require("./../models/usermodel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const routerUser = express.Router();
const secretPass = "mysecret";

// create user
routerUser.post("/userData", async (req, res) => {
  const createUser = userDataSchema(req.body);
  const { name, user, pass } = req.body;

  if (!name || !user || !pass) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  const existingUser = await userDataSchema.findOne({ user });
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "This User address is already in use" });
  }

  createUser
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// login user
routerUser.post("/login", async (req, res) => {
  const { user, pass } = req.body;
  try {
    const userName = await userDataSchema.findOne({ user });

    if (!user) {
      return res.status(400).json({ error: `Invalid credentials ${userName}` });
    }
    //falta arreglar algo aqui error en tipos de datos creo
    const isPasswordValid = await bcrypt.compare(pass, userName.pass);
    console.log(isPasswordValid)

    if (isPasswordValid === false )  {
      return res.status(400).json({ error: `Invalid credentials ${userName}` });
    }

    const token = jwt.sign({ email: user }, secretPass);
    res.json({ token });
  } catch {
    return res.status(400).json({ error: `Ocurrio un error` });
  }
});

module.exports = routerUser;
