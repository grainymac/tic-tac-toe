// --------------------------------QUERY SELECTORS
var gameStatus = document.querySelector('#game-status');
var boxes = document.querySelectorAll('#box');
var resetBtn = document.querySelector('#reset-btn');


// --------------------------------EVENT LISTENERS
resetBtn.addEventListener('click', resetGame);
boxes.addEventListener('click', boxClick);
//👆🏾make function for boxClick



var playerOne = new Player('one', '🔸', 0);
var playerTwo = new Player('two', '🔹', 0);
var ticTacToe = new Game(playerOne, playerTwo);

var currentPlayer = "X";
var gameState = ["", "", "", "", "", "", "", "", ""];
var activeGame = true;

var winnningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];



function resetGame() {
    activeGame = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    gameStatus.innerHTML = currentPlayerTurn();
    boxes.forEach(box => box.innerHTML = "");
    //an array method that executes function on each item
}

