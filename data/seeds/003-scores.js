exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('scores')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('scores').insert([
        {
          quiz_id: 1,
          team_id: 1,
          total_points_scored: 75,
          r1_points_scored: 7,
          r2_points_scored: 12,
          r3_points_scored: 7,
          r4_points_scored: 5,
          r5_points_scored: 8,
          r6_points_scored: 5,
          r7_points_scored: 7,
          r8_points_scored: 12,
          round_jokered: 'R2'
        },
        {
          quiz_id: 2,
          team_id: 1,
          total_points_scored: 65,
          r1_points_scored: 7,
          r2_points_scored: 9,
          r3_points_scored: 5,
          r4_points_scored: 6,
          r5_points_scored: 3,
          r6_points_scored: 5,
          r7_points_scored: 6,
          r8_points_scored: 12,
          round_jokered: 'R8'
        },
        {
          quiz_id: 3,
          team_id: 1,
          total_points_scored: 71,
          r1_points_scored: 6,
          r2_points_scored: 13,
          r3_points_scored: 6,
          r4_points_scored: 6,
          r5_points_scored: 6,
          r6_points_scored: 4,
          r7_points_scored: 7,
          r8_points_scored: 10,
          round_jokered: 'R2'
        },
        {
          quiz_id: 4,
          team_id: 1,
          total_points_scored: 79,
          r1_points_scored: 8,
          r2_points_scored: 8,
          r3_points_scored: 7,
          r4_points_scored: 7,
          r5_points_scored: 8,
          r6_points_scored: 6,
          r7_points_scored: 7,
          r8_points_scored: 14,
          round_jokered: 'R8'
        },
        {
          quiz_id: 1,
          team_id: 2,
          total_points_scored: 74,
          r1_points_scored: 7,
          r2_points_scored: 11,
          r3_points_scored: 7,
          r4_points_scored: 5,
          r5_points_scored: 7,
          r6_points_scored: 5,
          r7_points_scored: 6,
          r8_points_scored: 13,
          round_jokered: 'R8'
        },
        {
          quiz_id: 2,
          team_id: 2,
          total_points_scored: 71,
          r1_points_scored: 8,
          r2_points_scored: 11,
          r3_points_scored: 6,
          r4_points_scored: 8,
          r5_points_scored: 6,
          r6_points_scored: 4,
          r7_points_scored: 7,
          r8_points_scored: 10,
          round_jokered: 'R2'
        },
        {
          quiz_id: 3,
          team_id: 2,
          total_points_scored: 54,
          r1_points_scored: 6,
          r2_points_scored: 10,
          r3_points_scored: 5,
          r4_points_scored: 6,
          r5_points_scored: 6,
          r6_points_scored: 4,
          r7_points_scored: 1,
          r8_points_scored: 6,
          round_jokered: 'R2'
        },
        {
          quiz_id: 4,
          team_id: 2,
          total_points_scored: 74,
          r1_points_scored: 5,
          r2_points_scored: 13,
          r3_points_scored: 6,
          r4_points_scored: 7,
          r5_points_scored: 7,
          r6_points_scored: 7,
          r7_points_scored: 6,
          r8_points_scored: 10,
          round_jokered: 'R2'
        },
        {
          quiz_id: 1,
          team_id: 3,
          total_points_scored: 53,
          r1_points_scored: 8,
          r2_points_scored: 10,
          r3_points_scored: 6,
          r4_points_scored: 4,
          r5_points_scored: 8,
          r6_points_scored: 4,
          r7_points_scored: 3,
          r8_points_scored: 5,
          round_jokered: 'R8'
        },
        {
          quiz_id: 2,
          team_id: 3,
          total_points_scored: 69,
          r1_points_scored: 7,
          r2_points_scored: 13,
          r3_points_scored: 5,
          r4_points_scored: 5,
          r5_points_scored: 7,
          r6_points_scored: 4,
          r7_points_scored: 6,
          r8_points_scored: 9,
          round_jokered: 'R2'
        },
        {
          quiz_id: 3,
          team_id: 3,
          total_points_scored: 52,
          r1_points_scored: 6,
          r2_points_scored: 8,
          r3_points_scored: 6,
          r4_points_scored: 4,
          r5_points_scored: 3,
          r6_points_scored: 5,
          r7_points_scored: 2,
          r8_points_scored: 9,
          round_jokered: 'R8'
        },
        {
          quiz_id: 4,
          team_id: 3,
          total_points_scored: 75,
          r1_points_scored: 7,
          r2_points_scored: 14,
          r3_points_scored: 6,
          r4_points_scored: 7,
          r5_points_scored: 8,
          r6_points_scored: 4,
          r7_points_scored: 7,
          r8_points_scored: 8,
          round_jokered: 'R2'
        }
      ]);
    });
};
