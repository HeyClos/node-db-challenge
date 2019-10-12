exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Backyard redesign', description:'Summer backyard work', completed: false},
        {name: 'Job Hunt', description:'find a new job', completed: false},
        {name: 'Urban Farm', description:'Bring urban farming here', completed: false}
      ]);
    });
};
