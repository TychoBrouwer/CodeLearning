var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Input = /** @class */ (function () {
    function Input() {
        var _this = this;
        this.rotation = {
            rotate: false,
            clockwise: true
        };
        document.addEventListener('keydown', function (event) {
            if (event.key === 'd') {
                _this.rotation.clockwise = false;
                _this.rotation.rotate = true;
            }
            else if (event.key === 'a') {
                _this.rotation.clockwise = true;
                _this.rotation.rotate = true;
            }
        });
        document.addEventListener('keyup', function (event) {
            if (event.key === 'd' || event.key === 'a') {
                _this.rotation.rotate = false;
            }
        });
    }
    Input.prototype.turn = function () {
        return this.rotation;
    };
    return Input;
}());
var Game = /** @class */ (function () {
    function Game(gameprop) {
        this.gameprop = gameprop;
        this.berryCond = false;
    }
    Game.prototype.initBoard = function () {
        if (!this.board) {
            this.board = [];
        }
        for (var i = 0; i < this.gameprop.size.width; i++) {
            if (!this.board[i]) {
                this.board[i] = [];
            }
            for (var j = 0; j < this.gameprop.size.height; j++) {
                if (this.board[i][j] !== 'apple') {
                    this.board[i][j] = 'empty';
                }
            }
        }
    };
    Game.prototype.drawBoard = function () {
        var gameDiv = document.getElementById('game');
        gameDiv.style.gridTemplateColumns = 'auto '.repeat(this.gameprop.size.width);
        for (var i = 0; i < this.gameprop.size.width; i++) {
            for (var j = 0; j < this.gameprop.size.height; j++) {
                gameDiv.innerHTML += '<div class="grid-item" style="height: auto; width: auto"></div>';
            }
        }
    };
    Game.prototype.spawnBerry = function () {
        if (this.berryCond === false) {
            var luckyNum = Math.floor(Math.random() * 10);
            var column = Math.floor(Math.random() * this.gameprop.size.width);
            var row = Math.floor(Math.random() * this.gameprop.size.height);
            if (luckyNum === 2 && this.board[column][row] === 'empty') {
                this.board[column][row] = 'apple';
                this.berryCond = true;
            }
        }
    };
    Game.prototype.drawUpdateBoard = function () {
        var gameDiv = document.getElementById('game');
        for (var i = 0; i < this.gameprop.size.width; i++) {
            for (var j = 0; j < this.gameprop.size.height; j++) {
                var tileType = this.board[i][j];
                var tile = gameDiv.children[(i * this.gameprop.size.width) + j];
                if (tileType === 'head') {
                    tile.style.background = 'green';
                }
                else if (tileType === 'tail') {
                    tile.style.background = 'grey';
                }
                else if (tileType === 'apple') {
                    tile.style.background = 'red';
                }
                else {
                    tile.style.background = 'none';
                }
            }
        }
    };
    return Game;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Snake.prototype.create = function () {
        var x = Math.floor(this.gameprop.size.width / 2);
        var y = Math.floor(this.gameprop.size.height / 2);
        this.snake = {
            size: 1,
            orientation: 0,
            positionHead: {
                x: x,
                y: y
            },
            positions: [
                {
                    x: x,
                    y: y + 1
                }
            ]
        };
    };
    Snake.prototype.move = function () {
        this.snake.positions.unshift({
            x: this.snake.positionHead.x,
            y: this.snake.positionHead.y
        });
        try {
            if (this.snake.orientation === 0) {
                this.snake.positionHead.y--;
            }
            else if (this.snake.orientation === 1) {
                this.snake.positionHead.x++;
            }
            else if (this.snake.orientation === 2) {
                this.snake.positionHead.y++;
            }
            else if (this.snake.orientation === 3) {
                this.snake.positionHead.x--;
            }
            var newBlock = this.board[this.snake.positionHead.x][this.snake.positionHead.y];
            if (newBlock !== 'apple') {
                this.snake.positions.pop();
                if (newBlock !== 'empty') {
                    return false;
                }
            }
            else {
                console.log('berry!!!');
                this.snake.size++;
                this.berryCond = false;
            }
            return true;
        }
        catch (_a) {
            return false;
        }
    };
    Snake.prototype.rotate = function (clockwise) {
        if (clockwise) {
            if (this.snake.orientation === 3) {
                this.snake.orientation = 0;
            }
            else {
                this.snake.orientation++;
            }
        }
        else {
            if (this.snake.orientation === 0) {
                this.snake.orientation = 3;
            }
            else {
                this.snake.orientation--;
            }
        }
    };
    Snake.prototype.updateBoard = function () {
        this.board[this.snake.positionHead.x][this.snake.positionHead.y] = 'head';
        for (var i = 0; i < this.snake.size; i++) {
            this.board[this.snake.positions[i].x][this.snake.positions[i].y] = 'tail';
        }
        console.log(JSON.parse(JSON.stringify(this.board)));
    };
    return Snake;
}(Game));
var gameProp = {
    speed: 10,
    size: {
        height: 20,
        width: 20
    }
};
var delay = 3500 / gameProp.speed;
var gameStatus = true;
var input = new Input();
var snake = new Snake(gameProp);
snake.initBoard();
snake.create();
snake.updateBoard();
snake.drawBoard();
setTimeout(runSnake, 3500 / delay);
function runSnake() {
    var inp = input.turn();
    if (inp.rotate === true) {
        snake.rotate(inp.clockwise);
    }
    var move = snake.move();
    snake.initBoard();
    snake.updateBoard();
    snake.spawnBerry();
    snake.drawUpdateBoard();
    if (move) {
        setTimeout(runSnake, delay);
    }
    else {
        snake.initBoard();
        console.log('DEAD');
    }
}
//# sourceMappingURL=index.js.map