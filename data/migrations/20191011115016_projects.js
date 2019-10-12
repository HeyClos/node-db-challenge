
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
          .notNullable();
    //   tbl.integer('recipe_id')
    //       .unsigned()
    //       .notNullable()
    //       .references('id')
    //       .inTable('recipes')
    //   tbl.integer('ingredient_id')
    //       .unsigned()
    //       .notNullable()
    //       .references('id')
    //       .inTable('ingredients')
    //   tbl.integer('quantity')
    //       .unsigned()
    //       .notNullable()
    //   tbl.primary(['recipe_id', 'ingredient_id']);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects')
  };
  