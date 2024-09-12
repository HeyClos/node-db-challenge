const db = require('../dbConfig');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove,
  testing
};

function get() {
    return db('projects');
}

function getById(id) {
    return db('projects')
      .where({ id })
      .first();
}

function insert(project) {
  return db('projects')
    .insert(project)
    .then(([id]) => this.get(id));
}

function update(id, changes) {
  return db('projects')
    .where('id', id)
    .update(changes)
    .then(count => (count > 0 ? this.get(id) : null));
}

function remove(id) {
  return db('projects')
    .where('id', id)
    .del();
}

function getTask() {
  return db('projects as p')
    .join('projects_resources as b', 'p.id', '=', 'b.projects_id')
    .join('resources as r', 'b.resources_id', '=', 'r.id')
    .select('p.name', 'p.description', 'p.completed')
}

function getResource() {
  return db('projects as p')
    .join('projects_resources as b', 'p.id', '=', 'b.projects_id')
    .join('resources as r', 'b.resources_id', '=', 'r.id')
    .select('p.name', 'p.description', 'p.completed')
}

function testing() {
  return db('projects as p')
    .join('projects_resources as b', 'p.id', '=', 'b.projects_id')
    .join('resources as r', 'b.resources_id', '=', 'r.id')
    .select('p.name', 'p.description', 'p.completed')
}