import Game from './game.js'

let game = new Game()  //creating a new instance of the game


console.log(game.turn)
game.nextTurn()
console.log(game.turn)

console.log(game.board)