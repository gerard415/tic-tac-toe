export default class Game{
    constructor(){
        this.turn = 'X';       //initial move is X
        this.board = new Array(9).fill(null);    //creates a 3x3 array and it is empty when the game is started
    }

}