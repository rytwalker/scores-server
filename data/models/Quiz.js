const db = require('../dbConfig');

module.exports = {
  getAll: async function() {
    try {
      const quizzes = await db
        .select('q.id', 'q.date', 'q.total_points')
        .from('quizzes as q');
      return quizzes;
    } catch (error) {
      console.log(error);
    }
  },
  // GET SINGLE QUIZ
  get: async function(id) {
    try {
      let row = await db
        .select(
          't.id as team_id',
          't.name as team_name',
          's.total_points_scored as total',
          's.r1_points_scored as r1',
          's.r2_points_scored as r2',
          's.r3_points_scored as r3',
          's.r4_points_scored as r4',
          's.r5_points_scored as r5',
          's.r6_points_scored as r6',
          's.r7_points_scored as r7',
          's.r8_points_scored as r8',
          's.round_jokered as j'
        )
        .from('quizzes as q')
        .join('scores as s', 'q.id', 's.quiz_id')
        .join('teams as t', 's.team_id', 't.id')
        .orderBy('total', 'desc')
        .where({ 'q.id': id });

      let query = await db
        .select('quizzes.id', 'quizzes.date')
        .count('scores.id as total_teams')
        .from('quizzes')
        .join('scores', 'quizzes.id', 'scores.quiz_id')
        .where({ 'quizzes.id': id })
        .first();
      query.results = row;
      return query;
    } catch (error) {
      console.log({ error: 'There was an error accessing the DB.' });
    }
  }
};
