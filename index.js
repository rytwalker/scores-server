const express = require('express');
const cors = require('cors');
const quizzesRoute = require('./routes/api/quizzesRoute');
const teamsRoute = require('./routes/api/teamsRoute');

const server = express();

server.use(express.json());
server.use(cors());
server.use('/api/quizzes', quizzesRoute);
server.use('/api/teams', teamsRoute);

server.get('/', (req, res) => {
  res.send('teams at /api/teams');
});

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server started on port ${port}`));
