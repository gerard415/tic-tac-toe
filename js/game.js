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

    findwinningcombination(){
        const winningcombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6] 
        ];
                //array destructuring
        for (const combination of winningcombinations){
            const [a,b,c] = combination;

            if(this.board[a] && (this.board[a] === this.board[b] && this.board[a] === this.board[c])) {
                return combination
            }
        }
        return null
    }

    
}