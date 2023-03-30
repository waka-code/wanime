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

// create data All
/*router.post("/dataall", (req, res) => {
  const addData = new userSchema(req.body);

  addData.save((err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error al agregar elementos");
    } else {
      console.log("Elementos agregados correctamente");
      res.status(200).send(result);
    }
  });
});*/

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
