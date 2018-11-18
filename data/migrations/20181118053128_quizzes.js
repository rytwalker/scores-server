exports.up = function(knex, Promise) {
  return knex.schema.createTable('quizzes', table => {
    // primary key
    table.increments('id');
    // date field
    table.date('date').notNullable();
    // total points available
    table.integer('total_points').notNullable();
    // R1 points available
    table.integer('r1_points').notNullable();
    // R2 points available
    table.integer('r2_points').notNullable();
    // R3 points available
    table.integer('r3_points').notNullable();
    // R4 points available
    table.integer('r4_points').notNullable();
    // R5 points available
    table.integer('r5_points').notNullable();
    // R6 points available
    table.integer('r6_points').notNullable();
    // R7 points available
    table.integer('r7_points').notNullable();
    // R8 points available
    table.integer('r8_points').notNullable();
  });
};

exports.down = function(knex, Promise) {};
