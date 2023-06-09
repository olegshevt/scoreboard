class App {
  constructor() {
    this.games = [];
  }

  startGame(homeTeam, awayTeam) {
    const game = {
      homeTeam,
      awayTeam,
      homeScore: 0,
      awayScore: 0,
      startTime: new Date()
    };
    this.games.push(game);
    return game;
  }

  updateScore(game, homeScore, awayScore) {
    game.homeScore = homeScore;
    game.awayScore = awayScore;
  }

  finishGame(game) {
    const index = this.games.indexOf(game);
    if (index !== -1) {
      this.games.splice(index, 1);
    }
  }

  getGamesInProgress() {
    return this.games
      .map(game => ({
        homeTeam: game.homeTeam,
        awayTeam: game.awayTeam,
        totalScore: game.homeScore + game.awayScore,
        startTime: game.startTime
      }))
      .sort((a, b) => {
        if (a.totalScore !== b.totalScore) {
          return b.totalScore - a.totalScore;
        } else {
          return b.startTime - a.startTime;
        }
      });
  }

}


