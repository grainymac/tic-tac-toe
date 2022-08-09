var game = new Game();

// --------------------------------QUERY SELECTORS
var boxes = document.querySelectorAll('.box');
var gameBoard = document.querySelector('#game-board');
var playerTurn = document.querySelector('#player-turn');
var playerOneWins = document.querySelector('#player-one-wins');
var playerTwoWins = document.querySelector('#player-two-wins');
var gameStatus = document.querySelector('#game-status');
var resetBtn = document.querySelector('#reset-btn');

// --------------------------------EVENT LISTENERS
resetBtn.addEventListener('click', reset);
boxes.forEach(function(element) {element.addEventListener('click', chooseSquare)});

// --------------------------------FUNCTIONS
function chooseSquare(event) {
      checkBoardInfo(event);
      updateGameBoard(event);
      playerToken(event);
      game.boardPlay();
      switchTurn();
    
}

function checkBoardInfo() {
    if (game.currentPlayer.theBoard.length < 5 && !game.theBoard.includes(event.target) && event.target !== '') {
      return true;
    } else {
      return false;
    }
}

function updateGameBoard(event) {
    game.currentPlayer.theBoard.push(event.target.id);
    game.theBoard.push(event.target.id);
}

function playerToken(event) {
    for (var i = 0; i < boxes.length; i++) {
      if (boxes[i].id === event.target.id) {
        boxes[i].innerHTML = `${game.currentPlayer.token}`
      }
    }
}

function switchTurn() {
    game.playerChange();
    if (game.currentPlayer === game.playerOne && checkGameBoard()) {
      playerTurn.innerHTML = `<h2>Player 1's Turn!</h2>`;
    } else if (game.currentPlayer === game.playerTwo && checkGameBoard()) {
      playerTurn.innerHTML = `<h2>Player 2's Turn!</h2>`;
    }
}

function checkGameBoard() {
    if (!game.winner && !game.draw) {
      return true;
    } else {
      gameBoard.classList.add('no-click');
      return false;
    }
}

function incrementWins() {
    game.winner = game.currentPlayer;
    game.winner.wins += 1;
    newTurn();
}

function checkDraw() {
    game.draw = true;
    newTurn();
}

function newTurn() {
    if (game.winner === game.playerOne) {
      playerTurn.innerHTML = `<h2>Player One Won!</h2>`;
      playerOneWins.innerHTML = `Player One Wins:<br>${game.playerOne.wins}</br>`;
      game.playerChange();
    } else if (game.winner === game.playerTwo) {
      playerTurn.innerHTML = `<h2>Player Two Won!</h2>`;
      playerTwoWins.innerHTML = `Player Two Wins:<br>${game.playerTwo.wins}</br>`;
      game.playerChange();
    } else if (game.draw) {
      playerTurn.innerHTML = `<h2>It's a Draw.</h2>`;
    }
}

function reset() {
    game.draw = false;
    game.winner = '';
    gameBoard.classList.remove('no-click');
    switchTurn();
    refreshGameInfo();
}

function refreshGameInfo() {
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].innerHTML = '';
    }
    game.playerOne.theBoard = [];
    game.playerTwo.theBoard = [];
    game.theBoard = [];
}