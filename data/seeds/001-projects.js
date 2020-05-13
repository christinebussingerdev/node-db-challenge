exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
      .then(function () {
          // Inserts seed entries
          return knex('projects').insert([
              {
                  project_name: "Do The Laundry",
                  project_description: "Sometimes... clothes get dirty... and when they do.. you do.. LAUNDRY",
                  completed: false
              }
          ]);
      });
};