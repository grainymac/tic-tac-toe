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
boxes.forEach(function(clickedEvent) {clickedEvent.addEventListener('click', chooseSquare)});

// --------------------------------FUNCTIONS
var ticTacToe = new Game();

function chooseSquare(event) {
  if (checkBoardInfo(event)) {
    updateGameBoard(event);
    playerToken(event);
    ticTacToe.boardPlay();
    switchTurn();
  }
}

function checkBoardInfo() {
  if (ticTacToe.currentPlayer.theBoard.length < 5 && !ticTacToe.theBoard.includes(event.target.id)) {
    return true;
  } else {
    return false;
  }
}

function updateGameBoard(event) {
  ticTacToe.currentPlayer.theBoard.push(event.target.id);
  ticTacToe.theBoard.push(event.target.id);
}

function playerToken(event) {
  for (var i = 0; i < boxes.length; i++) {
    if (boxes[i].id === event.target.id) {
      boxes[i].innerHTML = `${ticTacToe.currentPlayer.token}`;
    }
  }
  gameBoard.classList.add('no-click');
}

function switchTurn() {
  gameBoard.classList.remove('no-click');
  ticTacToe.playerChange();
  if (ticTacToe.currentPlayer === ticTacToe.playerOne && checkGameBoard()) {
    playerTurn.innerHTML = `<h2>Player 1's turn to attack!!</h2>`;
  } else if (ticTacToe.currentPlayer === ticTacToe.playerTwo && checkGameBoard()) {
    playerTurn.innerHTML = `<h2>Player 2's turn to attack!!</h2>`;
  }
}

function checkGameBoard() {
  if (!ticTacToe.winner && !ticTacToe.isDraw) {
    return true;
  } else {
    gameBoard.classList.add('no-click');
    return false;
  }
}

function incrementWins() {
  ticTacToe.winner = ticTacToe.currentPlayer;
  ticTacToe.winner.wins += 1;
  newTurn();
  setTimeout(() => {reset(); }, 3000);
}

function checkIsDraw() {
  ticTacToe.isDraw = true;
  newTurn();
  setTimeout(() => {reset(); }, 3000);
}

function newTurn() {
  if (ticTacToe.winner === ticTacToe.playerOne) {
    gameStatus.innerHTML = `<h2>Player 1 Won!</h2>`;
    playerOneWins.innerHTML = `Wins: ${ticTacToe.playerOne.wins}`;
    ticTacToe.playerChange();
  } else if (ticTacToe.winner === ticTacToe.playerTwo) {
    gameStatus.innerHTML = `<h2>Player 2 Won!</h2>`;
    playerTwoWins.innerHTML = `Wins: ${ticTacToe.playerTwo.wins}`;
    ticTacToe.playerChange();
  } else if (ticTacToe.isDraw) {
    gameStatus.innerHTML = `<h2>It's a draw! Play again!</h2>`;
  }
  setTimeout(() => {reset(); }, 3000);
}

function reset() {
  gameStatus.innerHTML = '';
  ticTacToe.isDraw = false;
  ticTacToe.winner = '';
  gameBoard.classList.remove('no-click');
  switchTurn();
  refreshGameInfo();
}

function refreshGameInfo() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = '';
  }
  ticTacToe.playerOne.theBoard = [];
  ticTacToe.playerTwo.theBoard = [];
  ticTacToe.theBoard = [];
}