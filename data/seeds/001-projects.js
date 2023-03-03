/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("project_resources").truncate();
  await knex("tasks").truncate();
  await knex("resources").truncate();
  await knex("projects").truncate();

  await knex("projects").insert([
    {
      project_name: "fsweb_s14_sprint-challenge",
      project_description: "veri kalıcılığı ekleme spring challenge",
    },
  ]);
  await knex("resources").insert([
    {
      resource_name: "bilgisayar",
      resource_description:
        "yeterli hafızaya ve programlara sahip, çalışır durumda bir bilgisayar",
    },
    {
      resource_name: "elektrik",
      resource_description: "düzenli ve kesintisiz elektrik",
    },
    {
      resource_name: "internet_bağlantısı",
      resource_description: "kesintisiz ve yüksek hızda internet bağlantısı",
    },
  ]);
  await knex("tasks").insert([
    {
      task_description: "fork and clone the sprint challenge",
      task_notes: "use the workintech folder on desktop to save project files",
      project_id: 1,
    },
  ]);
  await knex("project_resources").insert([
    { project_id: 1, resource_id: 1 },
    { project_id: 1, resource_id: 2 },
    { project_id: 1, resource_id: 3 },
  ]);
};
