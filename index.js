const express = require('express');
const teamsRoute = require('./routes/api/teamsRoute');

const server = express();

server.use(express.json());
server.use('/api/teams', teamsRoute);

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server started on port ${port}`));
