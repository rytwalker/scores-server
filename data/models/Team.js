const db = require('../dbConfig');

module.exports = {
  // GET TEAMS or SINGLE TEAM
  get: async function(id) {
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
      query.where({ 't.id': id });
    }

    try {
      query = await query;
    } catch (error) {
      console.log({ error: 'There was an error accessing the DB.' });
    }

    query.forEach(team => {
      team.averagePercentCorrect = parseFloat(
        ((team.points / team.total) * 100).toFixed(2)
      );
      delete team.total;
      delete team.points;
    });

    return query;
  }
};
