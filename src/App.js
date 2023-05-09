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

}


