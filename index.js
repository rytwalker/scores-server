const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);
const server = express();

server.get('/', async (req, res) => {
  try {
    const teams = await db
      .select('t.name as Team')
      .avg('s.total_points_scored as Average Score ')
      .groupBy('Team')
      .orderBy('Average Score', 'desc')
      .from('teams as t')
      .join('scores as s', 't.id', 's.team_id');

    res.status(200).json(teams);
  } catch (errors) {
    res.status(500).json({ errors: 'There was an error.' });
  }
});

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server started on port ${port}`));
