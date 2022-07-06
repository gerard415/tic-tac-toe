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
        `
    }
}