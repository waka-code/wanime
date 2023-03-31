const express = require("express");
const userDataSchema = require("./../models/usermodel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const routerUser = express.Router();

// create user
routerUser.post("/userData", async (req, res) => {
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

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(pass, salt);

  const createUser = new userDataSchema({
    name,
    user,
    pass: hashedPassword,
  });

  createUser
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// login user
routerUser.post("/login", async (req, res) => {
  const secretPass = "mysecret";
  const { user, pass } = req.body;

  try {
    const userName = await userDataSchema.findOne({ user });

    if (!userName) {
      return res.status(400).json({ error: `Invalid credentials ${userName}` });
    }
    //falta arreglar algo aqui error en tipos de datos creo
    const isPasswordValid = await bcrypt.compare(pass, userName?.pass ?? "");

    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ error: `Invalid credentials ${userName} ${pass}` });
    }

    const token = jwt.sign({ email: user }, secretPass);
    res.json({ token });
  } catch {
    return res.status(400).json({ error: `Ocurrio un error` });
  }
});

routerUser.post("/logout", async (req, res) => {
  try {
    // Elimina el token del usuario al cerrar sesión
    res.clearCookie("token");
    res.status(200).send("Logged out successfully");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = routerUser;
