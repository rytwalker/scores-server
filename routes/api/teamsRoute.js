const express = require('express');

const db = require('../../data/models/Team');
const router = express.Router();

// GET TEAMS FOR LEADERBOARD
router.get('/', async (req, res) => {
  try {
    const teams = await db.get();

    teams.forEach(team => {
      team.averagePercentCorrect = parseFloat(
        ((team.points / team.total) * 100).toFixed(2)
      );
      delete team.total;
      delete team.points;
    });

    res.status(200).json(teams);
  } catch (errors) {
    res.status(500).json({ errors: 'There was an error.' });
  }
});

module.exports = router;
