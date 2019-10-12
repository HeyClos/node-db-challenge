
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {descriptions: 'buy roses', notes:'moon nursery', completed: false},
        {descriptions: 'make a linkedin', notes:'use new email address', completed: false},
        {descriptions: 'fill farmer application', notes:'freighfarms.com', completed: false}
      ]);
    });
};
