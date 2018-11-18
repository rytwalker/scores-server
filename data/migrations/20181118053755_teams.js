exports.up = function(knex, Promise) {
  return knex.schema.createTable('teams', table => {
    // primary key
    table.increments('id');
    // name field
    table.date('name');
  });
};

exports.down = function(knex, Promise) {};
