const express = require("express");
const userSchema = require("./../models/datamodels");

const router = express.Router();

// create data
router.post("/data", async (req, res) => {
  const addData = userSchema(req.body);
  addData.date = new Date();
  addData
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all data
router.get("/data", (req, res) => {
  const { page, limit } = req.query;
  try {
    userSchema
      .paginate({}, { page: page || 1, limit: limit || 10 })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Ocurrió un error en el servidor." });
  }
});

// get a data
router.get("/data/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a data
router.delete("/data/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findOneAndDelete({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.put("/data/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, gender, img, video } = req.body;

  const newData = {};
  // Verificar si cada campo está vacío
  if (title) newData.title = title;
  if (description) newData.description = description;
  if (gender) newData.gender = gender;
  if (img) newData.img = img;
  if (video) newData.video = video;

  userSchema
    .updateOne({ _id: id }, { $set: newData })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
