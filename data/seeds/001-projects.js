exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Backyard redesign', descriptions:'Summer backyard work', completed: false},
        {name: 'Job Hunt', descriptions:'find a new job', completed: false},
        {name: 'Urban Farm', descriptions:'Bring urban farming here', completed: false}
      ]);
    });
};
