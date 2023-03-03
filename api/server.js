const express = require("express");
const server = express();
server.use(express.json());

const projectsRouter = require("./project/router");
server.use("/api/projects", projectsRouter);

server.get("/", (req, res) => {
  res.status(200).json({
    statusCode: 200,
    message: "Server is up and running!",
  });
});

module.exports = server;
