exports.up = function(knex) {
  return (
      knex.schema
          .createTable('projects', tbl => {
              tbl.increments();
              tbl.string('name', 128)
                  .notNullable()
                  .unique();
              tbl.text('description');
              tbl.boolean('completed')
                  .notNullable()
                  .defaultTo(false);
          })
          .createTable('resources', tbl => {
              tbl.increments();
              tbl.string('name', 128)
                  .notNullable()
                  .unique();
              tbl.text('description')
                  .nullable();
          })
          .createTable('tasks', tbl => {
              tbl.increments();
              tbl.string('action_required', 256)
                  .notNullable();
              tbl.text('notes');
              tbl.boolean('completed')
                  .notNullable()
                  .defaultTo(false);
              tbl.integer('project_id', 6)
                  .unsigned()
                  .notNullable()
                  .references('id')
                  .inTable('projects');
          })
          .createTable('project_resources', tbl => {
              tbl.increments();
              tbl.integer('project_id', 6)
                  .notNullable()
                  .unsigned()
                  .references('id')
                  .inTable('projects');
              tbl.integer('resources_id', 6)
                  .notNullable()
                  .unsigned()
                  .references('id')
                  .inTable('resources');
          })
  )
};
exports.down = function(knex) {
  return (
      knex.schema
          .dropTableIfExists('project_resources')
          .dropTableIfExists('task')
          .dropTableIfExists('resource')
          .dropTableIfExists('project')
  )
};