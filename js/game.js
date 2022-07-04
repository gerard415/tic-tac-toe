export default class Game{
    constructor(){
        this.turn = 'X';       //initial move is X
        this.board = new Array(9).fill(null);    //creates a 3x3 array and it is empty when the game is started
    }

    nextTurn(){
        this.turn = this.turn === 'X' ? 'O' : 'X'
    }

    makeMove(i){
        if(this.board[i]){          //if there exists a value at an index, then it cannot be played at again
            return
        }

        this.board[i] = this.turn;
        this.nextTurn()
    }
}