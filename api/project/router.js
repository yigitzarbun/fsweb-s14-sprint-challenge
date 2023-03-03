const express = require("express");
const router = express.Router();
const projects = require("./model");

router.get("/", (req, res, next) => {
  projects
    .getAll()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => next(err));
});

router.post("/", (req, res, next) => {
  projects
    .add(req.body)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => next(err));
});

module.exports = router;
