class Game {
    constructor() {
        this.playerOne = new Player(1, '🔸');
        this.playerTwo = new Player(2, '🔹');
        this.currentPlayer = this.playerOne;
        this.winner = '';
        this.draw = false;
        this.board = [];
        this.winningConditions = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 5, 9],
            [2, 5, 8],
            [3, 5, 7],
            [1, 4, 7],
            [3, 6, 9]
        ];
    }

    playerChange() {
        if (this.currentPlayer === this.playerOne) {
            this.currentPlayer = this.playerTwo;
        } else if (this.currentPlayer === this.playerTwo) {
            this.currentPlayer = this.playerOne;
        }
    }

    boardPlay() {
        var onTheBoard = this.currentPlayer.board;
        if (onTheBoard.includes(this.winningConditions[0])) {
        }
    }
}
