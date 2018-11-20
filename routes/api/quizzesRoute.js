const express = require('express');

const db = require('../../data/models/Quiz');
const router = express.Router();

// GET TEAMS FOR LEADERBOARD
router.get('/', async (req, res) => {
  try {
    const quizzes = await db.get();
    res.status(200).json(quizzes);
  } catch (errors) {
    res.status(500).json({ errors: 'There was an error get the teams.' });
  }
});

// GET quiz BY ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const quiz = await db.get(id);
    return !quiz
      ? res.status(404).json({ message: 'That quiz does not exist.' })
      : res.status(200).json(quiz);
  } catch (errors) {
    res.status(500).json({ errors: 'There was an error getting that quiz.' });
  }
});

module.exports = router;
