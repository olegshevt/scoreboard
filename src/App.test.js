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
})
