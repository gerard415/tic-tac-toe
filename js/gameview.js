export default class Gameview{
    constructor(root){
        this.root = root;
        this.root.innerHTML = `
            <div class='header'>
                <div class='header__turn'>
                    X's Turn
                </div>
                <div class='header__status'>
                    In progress
                </div>
                <button type='button' class='header__restart'>
                    <i class='material-icons'>refresh</i>
                </button>
            </div>
            <div class="board">
                <div class="board__tile" data-index="0">O</div>
                <div class="board__tile" data-index="1">O</div>
                <div class="board__tile board__tile--winner" data-index="2">O</div>
                <div class="board__tile" data-index="3">O</div>
                <div class="board__tile" data-index="4">O</div>
                <div class="board__tile" data-index="5">O</div>
                <div class="board__tile" data-index="6">O</div>
                <div class="board__tile" data-index="7">O</div>
                <div class="board__tile" data-index="8">O</div>
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
}