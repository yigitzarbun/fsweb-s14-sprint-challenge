const express = require("express");
const router = express.Router();
const tasks = require("./model");

router.get("/", (req, res, next) => {
  tasks
    .getAll()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => next(err));
});
router.post("/", (req, res, next) => {
  tasks
    .add(req.body)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((err) => next(err));
});
module.exports = router;
