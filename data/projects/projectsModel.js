const db = require('../dbConfig');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove
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
