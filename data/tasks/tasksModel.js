const db = require('../dbConfig');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove
};

function get() {
    return db('tasks');
}

function getById(id) {
    return db('tasks')
      .where({ id })
      .first();
}

function insert(task) {
  return db('tasks')
    .insert(task)
    .then(([id]) => this.get(id));
}

function update(id, changes) {
  return db('tasks')
    .where('id', id)
    .update(changes)
    .then(count => (count > 0 ? this.get(id) : null));
}

function remove(id) {
  return db('tasks')
    .where('id', id)
    .del();
}
