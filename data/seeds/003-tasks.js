exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
      .then(function () {
          // Inserts seed entries
          return knex('tasks').insert([
              {
                  task_description: "At some point, the clothes must be consolidated.",
                  task_note: "Use the Force",
                  completed: false,
                  project_id: 1
              },
              {
                  task_description: "Whites and Colors? Myths! WASH IT ALL!",
                  task_note: "But keep those towels seperate.",
                  completed: false,
                  project_id: 1
              },
              {
                  task_description: "We hang dry out shirts and jackets... machine dry everything else!",
                  task_note: "Don't let that SHIrT shrink!",
                  completed: false,
                  project_id: 1
              },
              {
                  task_description: "Now, fold and sort. Classic folds only nothing fancy.",
                  task_note: "Channel mom here, it helps.",
                  completed: false,
                  project_id: 1
              },
          ]);
      });
};