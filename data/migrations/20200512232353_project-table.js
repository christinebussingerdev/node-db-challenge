exports.up = function(knex) {
  return (
      knex.schema
          .createTable('projects', tbl => {
              tbl.increments();
              tbl.string('project_name', 128)
                  .notNullable()
                  .unique();
              tbl.text('project_description');
              tbl.boolean('completed')
                  .notNullable()
                  .defaultTo(false);
          })
          .createTable('resources', tbl => {
              tbl.increments();
              tbl.string('resource_name', 128)
                  .notNullable()
                  .unique();
              tbl.text('resource_description')
                  .nullable();
          })
          .createTable('tasks', tbl => {
              tbl.increments();
              tbl.string('task_description', 256)
                  .notNullable();
              tbl.text('task_note');
              tbl.boolean('completed')
                  .notNullable()
                  .defaultTo(false);
              tbl.integer('project_id', 6)
                  .unsigned()
                  .notNullable()
                  .references('id')
                  .inTable('projects');
          })
          .createTable('projects_resources', tbl => {
              tbl.increments();
              tbl.integer('project_id', 6)
                  .notNullable()
                  .unsigned()
                  .references('id')
                  .inTable('projects');
              tbl.integer('resource_id')
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