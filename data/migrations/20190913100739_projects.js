exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', (table) => {
        table.increments()
        table.string('recipeName')
        table.string('instructions')
        })

      .createTable('ingredients', (table) => {
        table.increments()
        table.string('ingredientName')
        table.string('quantity')
        table.integer('recipes_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes')
  
};
