exports.up = function(knex, Promise) {
  return knex.schema.table('scores', table => {
    table.int('rank');
    table.boolean('wonTie');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('recipe-ingredients', table => {
    table.dropColumn('rank');
    table.dropColumn('wonTie');
  });
};
