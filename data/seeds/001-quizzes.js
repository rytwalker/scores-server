exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('quizzes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('quizzes').insert([
        {
          date: '10/24/2018',
          total_points: 96,
          r1_points: 8,
          r2_points: 16,
          r3_points: 8,
          r4_points: 8,
          r5_points: 8,
          r6_points: 8,
          r7_points: 8,
          r8_points: 16
        },
        {
          date: '10/31/2018',
          total_points: 96,
          r1_points: 8,
          r2_points: 16,
          r3_points: 8,
          r4_points: 8,
          r5_points: 8,
          r6_points: 8,
          r7_points: 8,
          r8_points: 16
        },
        {
          date: '11/07/2018',
          total_points: 96,
          r1_points: 8,
          r2_points: 16,
          r3_points: 8,
          r4_points: 8,
          r5_points: 8,
          r6_points: 8,
          r7_points: 8,
          r8_points: 16
        },
        {
          date: '11/14/2018',
          total_points: 96,
          r1_points: 8,
          r2_points: 16,
          r3_points: 8,
          r4_points: 8,
          r5_points: 8,
          r6_points: 8,
          r7_points: 8,
          r8_points: 16
        }
      ]);
    });
};
