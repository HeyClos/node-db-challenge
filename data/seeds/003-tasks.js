
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'buy roses', notes:'moon nursery', completed: false},
        {description: 'make a linkedin', notes:'use new email address', completed: false},
        {description: 'fill farmer application', notes:'freighfarms.com', completed: false}
      ]);
    });
};
