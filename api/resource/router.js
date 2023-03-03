const express = require("express");
const router = express.Router();
const resources = require("./model");

router.get("/", (req, res, next) => {
  resources
    .getAll()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => next(err));
});

router.post("/", (req, res, next) => {
  resources
    .add(req.body)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch((err) => next(err));
});
module.exports = router;
