class Game {
    constructor() {
        this.playerOne = new Player('one', '🔸');
        this.playerTwo = new Player('two', '🔹');
        this.currentPlayer = this.playerOne;
        this.theBoard = [];
        this.winner = '';
        this.isDraw = false;
    }

    playerChange() {
        if (this.currentPlayer === this.playerOne) {
            this.currentPlayer = this.playerTwo;
        } else {
            this.currentPlayer = this.playerOne;
        }
    }

    boardPlay() {
        if (this.currentPlayer.theBoard.includes('1') && this.currentPlayer.theBoard.includes('2') && this.currentPlayer.theBoard.includes('3')) {
            incrementWins();
        } else if (this.currentPlayer.theBoard.includes('4') && this.currentPlayer.theBoard.includes('5') && this.currentPlayer.theBoard.includes('6')) {
            incrementWins();
        } else if (this.currentPlayer.theBoard.includes('7') && this.currentPlayer.theBoard.includes('8') && this.currentPlayer.theBoard.includes('9')) {
            incrementWins();
        } else if (this.currentPlayer.theBoard.includes('1') && this.currentPlayer.theBoard.includes('4') && this.currentPlayer.theBoard.includes('7')) {
            incrementWins();
        } else if (this.currentPlayer.theBoard.includes('2') && this.currentPlayer.theBoard.includes('5') && this.currentPlayer.theBoard.includes('8')) {
            incrementWins();
        } else if (this.currentPlayer.theBoard.includes('3') && this.currentPlayer.theBoard.includes('6') && this.currentPlayer.theBoard.includes('9')) {
            incrementWins();
        } else if (this.currentPlayer.theBoard.includes('1') && this.currentPlayer.theBoard.includes('5') && this.currentPlayer.theBoard.includes('9')) {
            incrementWins();
        } else if (this.currentPlayer.theBoard.includes('3') && this.currentPlayer.theBoard.includes('5') && this.currentPlayer.theBoard.includes('7')) {
            incrementWins();
        } else if (this.theBoard.length === 9 && !this.winner) {
            checkIsDraw();
        }
    }
}