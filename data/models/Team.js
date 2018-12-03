const db = require('../dbConfig');

module.exports = {
  // GET TEAMS or SINGLE TEAM
  get: async function() {
    let query = await db('teams');
    console.log(query);
    return query;
  }
  // get: async function(id) {
  //   let quizzes;
  //   let query = db
  //     .select('t.id as id', 't.name as team_name')
  //     .sum('s.total_points_scored as points')
  //     .sum('q.total_points as total')
  //     .avg('s.total_points_scored as average_score ')
  //     .count('s.quiz_id as games_played')
  //     .from('teams as t')
  //     .join('scores as s', 't.id', 's.team_id')
  //     .join('quizzes as q', 's.quiz_id', 'q.id')
  //     .groupBy('team_name', 'id')
  //     .orderBy('average_score', 'desc');
  //   if (id) {
  //     query.where({ 't.id': id });
  //     try {
  //       quizzes = await db
  //         .select(
  //           'q.date',
  //           's.total_points_scored as total',
  //           's.r1_points_scored as r1',
  //           's.r2_points_scored as r2',
  //           's.r3_points_scored as r3',
  //           's.r4_points_scored as r4',
  //           's.r5_points_scored as r5',
  //           's.r6_points_scored as r6',
  //           's.r7_points_scored as r7',
  //           's.r8_points_scored as r8',
  //           's.round_jokered as j'
  //         )
  //         .from('teams as t')
  //         .join('scores as s', 't.id', 's.team_id')
  //         .join('quizzes as q', 's.quiz_id', 'q.id')
  //         .where({ 't.id': id });
  //     } catch (error) {
  //       console.log({
  //         error: "there was an error accessing that team's scores."
  //       });
  //     }
  //   }

  //   try {
  //     query = await query;
  //   } catch (error) {
  //     console.log({ error: 'There was an error accessing the DB.' });
  //   }

  //   query.forEach(team => {
  //     team.average_percent_correct = parseFloat(
  //       ((team.points / team.total) * 100).toFixed(2)
  //     );
  //     delete team.total;
  //     delete team.points;
  //     quizzes ? (team.quizzes = quizzes) : null;
  //   });

  //   return query;
  // }
};
