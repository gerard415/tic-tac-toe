import Game from './game.js'

let game = new Game()  //creating a new instance of the game


console.log(game.turn)
game.makeMove(1)
console.log(game.board.join(','))

console.log(game.turn)
game.makeMove(4)
console.log(game.board.join(','))

console.log(game.turn)
game.makeMove(4)
console.log(game.board.join(','))