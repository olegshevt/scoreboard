# Live Football World Cup Scoreboard

A library for managing live football matches and their scores in a World Cup.

## Installation

This library can be installed via npm:

```js
npm install football-app
```

## Usage

First, import the library:

```js
import App from 'App'
```

Then, create an instance of the Scoreboard:

```js
const scoreboard = new Scoreboard()
```

## Starting a new game

To start a new game, call the startGame method and pass the names of the home team and the away team:

```js
scoreboard.startGame('Mexico', 'Canada')
```

## Updating the score of a game
To update the score of a game, call the updateScore method and pass the game object as well as the scores of the home team and the away team:


```js
const game = scoreboard.startGame('Mexico', 'Canada')
scoreboard.updateScore(game, 0, 5)
```

## Finishing a game
To finish a game, call the finishGame method and pass the game object:

```js
const game = scoreboard.startGame('Mexico', 'Canada');
scoreboard.finishGame(game);
```

## Getting the summary of games in progress
To get the summary of games in progress ordered by their total score, call the getGamesInProgress method:

```js
const gamesInProgress = scoreboard.getGamesInProgress();
```

The gamesInProgress array will contain game objects sorted by their total score. If multiple games have the same total score, they will be sorted by the most recently started game.

## Assumptions

-   The library is designed to manage live football matches in a World Cup format. It does not support other formats or sports.
-   The library is designed to be used in a single-threaded environment. It does not support concurrent access to the scoreboard or its games.
-   The library is designed to be used as an in-memory store solution only. It does not support persistence of data between sessions.