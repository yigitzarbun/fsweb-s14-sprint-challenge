const knex = require("knex");
const db = require("../../data/dbConfig");

async function getAll() {
  return await db("resources");
}

async function add(resource) {
  const newResourceIdArray = await db("resources").insert(resource);
  const newResourceId = newResourceIdArray[0];
  const newResource = await db("resources").where("resource_id", newResourceId);
  return newResource[0];
}

module.exports = { getAll, add };
