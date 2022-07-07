import Game from './game.js'
import GameView from './gameview.js'

let game = new Game()  //creating a new instance of the game
let gameview = new GameView(document.getElementById('app'))


gameview.onTileclick = function(i){
    game.makeMove(i)
    gameview.update(game)
}

gameview.onRestartclick = function(){
    game = new Game()
    gameview.update(game)
    
}





















// game.makeMove(1)
// game.makeMove(3)
// game.makeMove(7)
// game.makeMove(4)
// game.makeMove(2)
// game.makeMove(5)



// console.log(game.board.join(','))
// console.log(game.findwinningcombination())

