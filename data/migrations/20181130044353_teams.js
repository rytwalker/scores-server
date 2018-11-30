exports.up = function(knex, Promise) {
  return knex.schema.createTable('teams', table => {
    // primary key
    table.increments();
    // name field
    table.string('name', 255);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('teams');
};
