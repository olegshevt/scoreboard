import App from './App';
describe('LiveFootballWorldCupScoreboard', () => {
  let scoreboard;

  beforeEach(() => {
    scoreboard = new App();
  });

  describe('startGame', () => {
    it('should start a new game with 0-0 score', () => {
      const game = scoreboard.startGame('Home Team', 'Away Team');
      expect(game).toEqual({
        homeTeam: 'Home Team',
        awayTeam: 'Away Team',
        homeScore: 0,
        awayScore: 0,
        startTime: expect.any(Date)
      });
    });

    it('should add the game to the scoreboard', () => {
      scoreboard.startGame('Home Team', 'Away Team');
      expect(scoreboard.games).toHaveLength(1);
    });

  });

  describe('updateScore', () => {
    let game;

    beforeEach(() => {
      game = scoreboard.startGame('Home Team', 'Away Team');
    });

    it('should update the score of a game', () => {
      scoreboard.updateScore(game, 2, 1);
      expect(game.homeScore).toBe(2);
      expect(game.awayScore).toBe(1);
    });
  });

  describe('finishGame', () => {
    let game;

    beforeEach(() => {
      game = scoreboard.startGame('Home Team', 'Away Team');
    });

    it('should remove a game from the scoreboard', () => {
      scoreboard.finishGame(game);
      expect(scoreboard.games).toHaveLength(0);
    });
  });

  describe('getGamesInProgress', () => {
    it('should return games in progress ordered by their total score', () => {
      scoreboard.startGame('Mexico', 'Canada');
      scoreboard.startGame('Spain', 'Brazil');
      scoreboard.startGame('Germany', 'France');
      scoreboard.startGame('Uruguay', 'Italy');
      scoreboard.startGame('Argentina', 'Australia');
  
      scoreboard.updateScore(scoreboard.games[0], 0, 5);
      scoreboard.updateScore(scoreboard.games[1], 10, 2);
      scoreboard.updateScore(scoreboard.games[2], 2, 2);
      scoreboard.updateScore(scoreboard.games[3], 6, 6);
      scoreboard.updateScore(scoreboard.games[4], 3, 1);
  
      const summary = scoreboard.getGamesInProgress();
      expect(summary).toHaveLength(5);
      expect(summary[0].totalScore).toBe(12);
      expect(summary[0].homeTeam).toBe('Spain');
      expect(summary[0].awayTeam).toBe('Brazil');
      expect(summary[1].totalScore).toBe(11);
      expect(summary[1].homeTeam).toBe('Uruguay');
      expect(summary[1].awayTeam).toBe('Italy');
      expect(summary[2].totalScore).toBe(5);
      expect(summary[2].homeTeam).toBe('Mexico');
      expect(summary[2].awayTeam).toBe('Canada');
      expect(summary[3].totalScore).toBe(4);
      expect(summary[3].homeTeam).toBe('Argentina');
      expect(summary[3].awayTeam).toBe('Australia');
      expect(summary[4].totalScore).toBe(4);
      expect(summary[4].homeTeam).toBe('Germany');
      expect(summary[4].awayTeam).toBe('France');
    });
  });
})
