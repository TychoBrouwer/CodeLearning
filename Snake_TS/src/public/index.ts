type GameProp = {
    speed: number;

    size: {
        height: number;
        width: number;    
    }
}

type Position = {
    x: number;
    y: number;
}

type SnakeT = {
    size: number;
    orientation: number;    // up = 0, right = 1, down = 2, left = 3
    positionHead: Position;
    positions: Array<Position>;
}

type RotationInput = {
    rotate: boolean, 
    clockwise: boolean
}

class Input {
    rotation: RotationInput;

    constructor() {
        this.rotation = {
            rotate: false,
            clockwise: true
        }

        document.addEventListener('keydown', event => {
            if (event.key === 'd') {
                this.rotation.clockwise = false;
                this.rotation.rotate = true;
            } else if (event.key === 'a') {
                this.rotation.clockwise = true;
                this.rotation.rotate = true;
            }

        })

        document.addEventListener('keyup', event => {
            if (event.key === 'd' || event.key === 'a') {
                this.rotation.rotate = false;
            }
        })

    }

    turn() {
        return this.rotation;
    }
}

class Game {
    gameprop: GameProp;
    board: Array<Array<string>>;
    berryCond: boolean;

    constructor(gameprop: GameProp) {
        this.gameprop = gameprop;
        this.berryCond = false;
    }

    initBoard() {
        if (!this.board) {
            this.board = [];
        }
    
        for (let i = 0; i < this.gameprop.size.width; i++) {
            if (!this.board[i]) {
                this.board[i] = [];
            }

            for (let j = 0; j < this.gameprop.size.height; j++) {
                if (this.board[i][j] !== 'apple') {
                    this.board[i][j] = 'empty';
                }
            }
        }
    }

    drawBoard() {
        const gameDiv = document.getElementById('game');
        gameDiv.style.gridTemplateColumns = 'auto '.repeat(this.gameprop.size.width);

        for (let i = 0; i < this.gameprop.size.width; i++) {
            for (let j = 0; j < this.gameprop.size.height; j++) {
                gameDiv.innerHTML += '<div class="grid-item" style="height: auto; width: auto"></div>';
            }
        }
    }

    spawnBerry() {
        if (this.berryCond === false) {
            const luckyNum = Math.floor(Math.random() * 10);

            const column = Math.floor(Math.random() * this.gameprop.size.width);
            const row = Math.floor(Math.random() * this.gameprop.size.height);
    
            if (luckyNum === 2 && this.board[column][row] === 'empty') {
                this.board[column][row] = 'apple';

                this.berryCond = true;
            }
        }
    }

    drawUpdateBoard() {
        const gameDiv = document.getElementById('game');

        for (let i = 0; i < this.gameprop.size.width; i++) {
            for (let j = 0; j < this.gameprop.size.height; j++) {
                const tileType = this.board[i][j];
                const tile = (gameDiv.children[(i * this.gameprop.size.width) + j] as HTMLElement);

                if (tileType === 'head') {
                    tile.style.background = 'green';
                } else if (tileType === 'tail')  {
                    tile.style.background = 'grey';
                } else if (tileType === 'apple') {
                    tile.style.background = 'red';
                } else {
                    tile.style.background = 'none';
                }
            }
        }
    }
}

class Snake extends Game {
    snake: SnakeT;

    create() {
        const x = Math.floor(this.gameprop.size.width / 2);
        const y = Math.floor(this.gameprop.size.height / 2);

        this.snake = {
            size: 1,
            orientation: 0,
            positionHead: {
                x: x,
                y: y,
            },
            positions: [
                { 
                    x: x,
                    y: y + 1
                }
            ]
        }
    }

    move() {
        this.snake.positions.unshift({
            x: this.snake.positionHead.x,
            y: this.snake.positionHead.y
        });

        try {
            if (this.snake.orientation === 0) {
                this.snake.positionHead.y--;
            } else if (this.snake.orientation === 1) {
                this.snake.positionHead.x++;
            } else if (this.snake.orientation === 2) {
                this.snake.positionHead.y++;
            } else if (this.snake.orientation === 3) {
                this.snake.positionHead.x--;
            }

            const newBlock = this.board[this.snake.positionHead.x][this.snake.positionHead.y];

            if (newBlock !== 'apple') {
                this.snake.positions.pop();

                if (newBlock !== 'empty') {
                    return false;
                }
            } else {
                console.log('berry!!!');

                this.snake.size++;
                this.berryCond = false;
            }

            return true;
        } catch {
            return false;
        }
    }

    rotate(clockwise: boolean) {
        if (clockwise) {
            if (this.snake.orientation === 3) {
                this.snake.orientation = 0;
            } else {
                this.snake.orientation++;
            }
        } else {
            if (this.snake.orientation === 0) {
                this.snake.orientation = 3;
            } else {
                this.snake.orientation--;
            }
        }
    }

    updateBoard() {
        this.board[this.snake.positionHead.x][this.snake.positionHead.y] = 'head';

        for (let i = 0; i < this.snake.size; i++) {
            this.board[this.snake.positions[i].x][this.snake.positions[i].y] = 'tail';
        }

        console.log(JSON.parse(JSON.stringify(this.board)))
    }
}

const gameProp: GameProp = {
    speed: 10,
    size: {
        height: 20,
        width: 20
    }
}

const delay = 3500 / gameProp.speed;

let gameStatus = true;

let input = new Input();
let snake = new Snake(gameProp);

snake.initBoard()
snake.create()
snake.updateBoard()
snake.drawBoard()

setTimeout(runSnake, 3500 / delay)

function runSnake() {
    const inp = input.turn()

    if (inp.rotate === true) {
        snake.rotate(inp.clockwise)
    }

    const move = snake.move()

    snake.initBoard()

    snake.updateBoard()
    snake.spawnBerry()

    snake.drawUpdateBoard()

    if (move) {
        setTimeout(runSnake, delay)
    } else {
        snake.initBoard()

        console.log('DEAD');
    }
}