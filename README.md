# SERVER FOR PUB QUIZ SCORE TRACKER

| GET | /api/teams | Returns an array of all the team objects contained in the database.

### Team Schema

```
{
  teamName: "Team Name",
  averageScore: "Average score based on 96 total points (float)",
  gamesPlayed: "Number of games played (integer)",
  averagePercentCorrect: "Average percent correct (float)"
}
```
