exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
      .then(function () {
          // Inserts seed entries
          return knex('resources').insert([
              {
                  resource_name: "Hamper",
                  resource_description: "Something to carry the clothes."
              },
              {
                  resource_name: "Tide Pod",
                  resource_description: "Something to wash the clothes."
              },
              {
                  resource_name: "Dryer Sheet",
                  resource_description: "Something to give the clothes a nice scent."
              },
              {
                  resource_name: "Hangers",
                  resource_description: "Something to hang the clothes."
              },
          ]);
      });
};