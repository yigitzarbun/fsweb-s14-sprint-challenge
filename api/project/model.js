const knex = require("knex");
const db = require("./../../data/dbConfig");

async function getAll() {
  const projects = await db("projects");
  const result = [];
  projects.forEach((project) => {
    if (project.project_completed == 0) {
      project.project_completed = false;
    } else {
      project.project_completed = true;
    }
    result.push(project);
  });
  return result;
}

async function add(project) {
  const newProjectIdArray = await db("projects").insert(project);
  const newProjectId = newProjectIdArray[0];
  const newProject = await db("projects")
    .where("project_id", newProjectId)
    .first();
  if (newProject.project_completed == 0) {
    newProject.project_completed = false;
  } else {
    newProject.project_completed = true;
  }
  return newProject;
}

module.exports = { getAll, add };
