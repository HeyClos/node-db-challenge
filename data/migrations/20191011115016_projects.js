
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name', 128)
          .unique()
          .notNullable();
      tbl.string('description', 128)
      tbl.boolean('completed')
          .defaultTo('false')
          .notNullable();
    })
    .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('name', 128)
          .unique()
          .notNullable()
      tbl.string('description', 128)
    })
    .createTable('tasks', tbl => {
      tbl.string('description', 128)
          .unique()
          .notNullable();
      tbl.string('notes', 128)
      tbl.boolean('completed')
          .defaultTo('false')
          .notNullable()
      })
    .createTable('projects_resources', tbl => {
      tbl.increments();
      tbl.integer('projects_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('projects')
         .onUpdate('CASCADE')
         .onDelete('CASCADE')
      tbl.integer('resources_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('resources')
         .onUpdate('CASCADE')
         .onDelete('CASCADE')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('projects_resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects')
  };
  
  // db('projects')
  // .select('columns', 'columns')
  // .join('table', 'foreign_key' '=' 'primary_key')
  // .where({ id })