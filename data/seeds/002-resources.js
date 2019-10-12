
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'Stapler', description: 'staples stuff'},
        {name: 'potting soil', description: 'special rose mix'},
        {name: 'new laptop', description: 'mac all day baby'},
        {name: 'freight farm', description: 'freightfarms.com'}
      ]);
    });
};
