exports.up = function(knex, Promise) {
  return knex.schema.createTable('scores', table => {
    // primary key
    table.increments();
    // foreign key for quizzes
    table
      .integer('quiz_id')
      .unsigned()
      .references('id')
      .inTable('quizzes');

    // foreign key for teams
    table
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
    // R8 points
    table.string('round_jokered', 255).notNullable();
    // rank
    table.integer('rank');
    // if tie
    table.boolean('wonTie');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('scores');
};
