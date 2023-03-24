const express = require("express");
const userSchema = require("./../models/datamodels");

const router = express.Router();

// create data
router.post("/data", (req, res) => {
  const addData = userSchema(req.body);
  addData
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all data
router.get("/data", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
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
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a data
router.put("/data/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, gender, img, video } = req.body;
  userSchema
    .updateOne(
      { _id: id },
      { $set: { title, description, gender, img, video } }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
