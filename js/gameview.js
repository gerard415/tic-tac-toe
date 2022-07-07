export default class Gameview{
    constructor(root){
        this.root = root;
        this.root.innerHTML = `
            <div class='header'>
                <div class='header__turn'>
                    
                </div>
                <div class='header__status'>
                    
                </div>
                <button type='button' class='header__restart'>
                    <i class='material-icons'>refresh</i>
                </button>
            </div>
            <div class="board">
                <div class="board__tile" data-index="0"></div>
                <div class="board__tile" data-index="1"></div>
                <div class="board__tile" data-index="2"></div>
                <div class="board__tile" data-index="3"></div>
                <div class="board__tile" data-index="4"></div>
                <div class="board__tile" data-index="5"></div>
                <div class="board__tile" data-index="6"></div>
                <div class="board__tile" data-index="7"></div>
                <div class="board__tile" data-index="8"></div>
            </div>
        `;

        this.onTileclick = '';
        this.onRestartclick = '';

        this.root.querySelectorAll('.board__tile').forEach(tile =>{
            tile.addEventListener('click', ()=>{
                this.onTileclick(tile.dataset.index)
            })
            
        })

        this.root.querySelector('.header__restart').addEventListener('click', ()=>{
            this.onRestartclick()
        })
    }

    //update board
    update(game) {
        this.updateStatus(game)
        this.updateTurn(game)
        this.updateBoard(game)
    }

    updateStatus(game){
        let status = 'In progress'

        if(game.findwinningcombination()){
            status = `${game.turn} is the winner`
        }else if (!game.isinprogress()){
            status = "It's a tie"
        }

        this.root.querySelector('.header__status').textContent = status
    }

    updateTurn(game){
        this.root.querySelector('.header__turn').textContent = `${game.turn}'s turn`
    }

    updateBoard(game){
        const winningCombination = game.findwinningcombination();

        for (let i = 0; i < game.board.length; i++) {
            const tile = this.root.querySelector(`.board__tile[data-index="${i}"]`);

            tile.classList.remove("board__tile--winner");
            tile.textContent = game.board[i];

            if (winningCombination && winningCombination.includes(i)) {
                tile.classList.add("board__tile--winner");
            }
        }
    }
}