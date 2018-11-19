const express = require('express');

const db = require('../../data/models/Team');
const router = express.Router();

// GET TEAMS FOR LEADERBOARD
router.get('/', async (req, res) => {
  try {
    const teams = await db.get();
    res.status(200).json(teams);
  } catch (errors) {
    res.status(500).json({ errors: 'There was an error get the teams.' });
  }
});

// GET TEAM BY ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const team = await db.get(id);
    return !team.length
      ? res.status(404).json({ message: 'That team does not exist.' })
      : res.status(200).json(team[0]);
  } catch (errors) {
    res.status(500).json({ errors: 'There was an error getting that team.' });
  }
});

module.exports = router;
