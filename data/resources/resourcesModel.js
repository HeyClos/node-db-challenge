const db = require('../dbConfig.js');
const mappers = require('./mappers');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove
};

function get() {
    return db('resources');
}

function getById(id) {
    return db('resources')
      .where({ id })
      .first();
}

function insert(resource) {
  return db('resources')
    .insert(resource)
    .then(([id]) => this.get(id));
}

function update(id, changes) {
  return db('resources')
    .where('id', id)
    .update(changes)
    .then(count => (count > 0 ? this.get(id) : null));
}

function remove(id) {
  return db('resources')
    .where('id', id)
    .del();
}
