"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = require("./components/game");
window.onload = function () {
    const gameCanvas = document.getElementById('mainGameCanvas');
    const gameContext = gameCanvas.getContext('2d');
    const overlayCanvas = document.getElementById('overlayCanvas');
    const overlayContext = overlayCanvas.getContext('2d');
    if (gameContext && overlayContext) {
        const game = new game_1.Game(gameContext, overlayContext);
        gameCanvas.height = game.GAME_HEIGHT;
        gameCanvas.width = game.GAME_WIDTH;
        overlayCanvas.height = game.GAME_HEIGHT;
        overlayCanvas.width = game.GAME_WIDTH;
    }
};
//# sourceMappingURL=main.js.map