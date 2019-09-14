exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('project', (table) => {
            table.increments()
            table.string('projectName')
            table.string('projectDescription')
            })
        .createTable('task', (table) => {
            table.increments()
            table.string('taskDescription')
            table.string('taskNotes')
            table.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
        .createTable('resource', (table) => {
            table.increments()
            table.string('resourceName')
            table.string('resourceDescription')
            table.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes')
  
};
