const knex = require("knex");
const db = require("./../../data/dbConfig");

async function getAll() {
  const projects = await db("projects");
  const result = [];
  projects.forEach((project) => {
    if (project.project_completed == 0) {
      project.project_completed = "false";
    } else {
      project.project_completed = "true";
    }
    result.push(project);
  });
  return result;
}

module.exports = { getAll };
