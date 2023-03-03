const knex = require("knex");
const db = require("../../data/dbConfig");

async function getAll() {
  const tasks = await db("tasks")
    .leftJoin("projects", "projects.project_id", "tasks.project_id")
    .select(
      "tasks.task_id",
      "tasks.task_description",
      "tasks.task_notes",
      "tasks.task_completed",
      "projects.project_name",
      "projects.project_description"
    );

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].task_completed == 0) {
      tasks[i].task_completed = false;
    } else {
      tasks[i].task_completed = true;
    }
  }
  return tasks;
}
async function add(task) {
  const newTaskArrayId = await db("tasks").insert(task);
  const newTaskId = newTaskArrayId[0];
  const newTask = await db("tasks").where("task_id", newTaskId).first();
  if (newTask.task_completed == 0) {
    newTask.task_completed = false;
  } else {
    newTask.task_completed = true;
  }
  return newTask;
}

module.exports = { getAll, add };
