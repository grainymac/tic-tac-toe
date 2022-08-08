class Game {
    constructor() {
        this.playerOne = new Player('one', '🔸');
        this.playerTwo = new Player('two', '🔹');
        this.currentPlayer = this.playerOne;
        this.winner = '';
        this.draw = false;
        this.theBoard = [];
    }

    playerChange() {
        if (this.currentPlayer === this.playerOne) {
            this.currentPlayer = this.playerTwo;
        } else if (this.currentPlayer === this.playerTwo) {
            this.currentPlayer = this.playerOne;
        }
    }

    boardPlay() {
        var onTheBoard = this.currentPlayer.theBoard;

        if (onTheBoard.includes("1") && onTheBoard.includes("2") && onTheBoard.includes("3")) {
            incrementWins();
        } else if (onTheBoard.includes("4") && onTheBoard.includes("5") && onTheBoard.includes("6")) {
            incrementWins();
        } else if (onTheBoard.includes("7") && onTheBoard.includes("8") && onTheBoard.includes("9")) {
            incrementWins();
        } else if (onTheBoard.includes("1") && onTheBoard.includes("4") && onTheBoard.includes("7")) {
            incrementWins();
        } else if (onTheBoard.includes("2") && onTheBoard.includes("5") && onTheBoard.includes("8")) {
            incrementWins();
        } else if (onTheBoard.includes("3") && onTheBoard.includes("6") && onTheBoard.includes("9")) {
            incrementWins();
        } else if (onTheBoard.includes("1") && onTheBoard.includes("5") && onTheBoard.includes("9")) {
            incrementWins();
        } else if (onTheBoard.includes("3") && onTheBoard.includes("5") && onTheBoard.includes("7")) {
            incrementWins();
        } else if (this.theBoard.length === 9 && !this.winner) {
            checkDraw();
        }
    }
}