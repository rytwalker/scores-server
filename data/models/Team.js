const db = require('../dbConfig');

module.exports = {
  // GET TEAMS or SINGLE TEAM
  get: function(id) {
    let query = db
      .select('t.name as teamName')
      .sum('s.total_points_scored as points')
      .sum('q.total_points as total')
      .avg('s.total_points_scored as averageScore ')
      .count('s.quiz_id as gamesPlayed')
      .groupBy('teamName')
      .orderBy('averageScore', 'desc')
      .from('teams as t')
      .join('scores as s', 't.id', 's.team_id')
      .join('quizzes as q', 's.quiz_id', 'q.id');

    if (id) {
      return query.where({ 't.id': id }).first();
    } else {
      return query;
    }
  }
};
