const express = require("express");
const server = express();
server.use(express.json());

const projectsRouter = require("./project/router");
server.use("/api/projects", projectsRouter);

const resourcesRouter = require("./resource/router");
server.use("/api/resources", resourcesRouter);

const tasksRouter = require("./task/router");
server.use("/api/tasks", tasksRouter);

server.get("/", (req, res) => {
  res.status(200).json({
    statusCode: 200,
    message: "Server is up and running!",
  });
});

module.exports = server;
