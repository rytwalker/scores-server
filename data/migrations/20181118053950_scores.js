exports.up = function(knex, Promise) {
  return knex.schema.createTable('scores', table => {
    // primary key
    table.increments('id');
    // foreign key for quizzes
    tbl
      .integer('quiz_id')
      .unsigned()
      .references('id')
      .inTable('quizzes');

    // foreign key for teams
    tbl
      .integer('team_id')
      .unsigned()
      .references('id')
      .inTable('teams');
    // points scored
    table.integer('total_points_scored').notNullable();
    // R1 points
    table.integer('r1_points_scored').notNullable();
    // R2 points
    table.integer('r2_points_scored').notNullable();
    // R3 points
    table.integer('r3_points_scored').notNullable();
    // R4 points
    table.integer('r4_points_scored').notNullable();
    // R5 points
    table.integer('r5_points_scored').notNullable();
    // R6 points
    table.integer('r6_points_scored').notNullable();
    // R7 points
    table.integer('r7_points_scored').notNullable();
    // R8 points
    table.integer('r8_points_scored').notNullable();
  });
};

exports.down = function(knex, Promise) {};
