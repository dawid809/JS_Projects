/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lab3-tictactoe/src/board.ts":
/*!*************************************!*\
  !*** ./lab3-tictactoe/src/board.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Board = /** @class */ (function () {\r\n    function Board() {\r\n    }\r\n    Board.prototype.CreateBoard = function () {\r\n        // Game Wrapper\r\n        var wrapper = document.createElement(\"div\");\r\n        wrapper.className = \"wrapper\";\r\n        var gameWrapper = document.createElement(\"div\");\r\n        gameWrapper.className = \"gameWrapper\";\r\n        var header = document.createElement(\"div\");\r\n        header.className = \"header\";\r\n        document.body.appendChild(wrapper);\r\n        wrapper.appendChild(header);\r\n        wrapper.appendChild(gameWrapper);\r\n        // Game Header and Title\r\n        var title = document.createElement(\"h1\");\r\n        title.textContent = \"Kółko i krzyżyk\";\r\n        var startButton = document.createElement(\"button\");\r\n        startButton.className = \"startButton\";\r\n        startButton.textContent = \"New Game\";\r\n        header.appendChild(title);\r\n        header.appendChild(startButton);\r\n        // Game Wrapper PlayerX and PlayerO\r\n        var gameHeader = document.createElement(\"div\");\r\n        gameHeader.className = \"gameHeader\";\r\n        var spanX = document.createElement(\"span\");\r\n        var spanO = document.createElement(\"span\");\r\n        var playerX = document.createElement(\"div\");\r\n        playerX.className = \"playerX\";\r\n        spanX.textContent = \"Player X\";\r\n        spanO.textContent = \"Player O\";\r\n        var playerO = document.createElement(\"div\");\r\n        playerO.className = \"playerO\";\r\n        gameWrapper.appendChild(gameHeader);\r\n        gameHeader.appendChild(playerX);\r\n        playerX.appendChild(spanX);\r\n        gameHeader.appendChild(playerO);\r\n        playerO.appendChild(spanO);\r\n        // Board\r\n        var board = document.createElement(\"div\");\r\n        board.className = \"board\";\r\n        gameWrapper.appendChild(board);\r\n        for (var i = 0; i < 9; i++) {\r\n            var tile = document.createElement(\"div\");\r\n            tile.className = \"tile\";\r\n            tile.tabIndex = i;\r\n            console.log(i, \"index\");\r\n            board.appendChild(tile);\r\n        }\r\n    };\r\n    return Board;\r\n}());\r\nexports.default = Board;\r\n\n\n//# sourceURL=webpack:///./lab3-tictactoe/src/board.ts?");

/***/ }),

/***/ "./lab3-tictactoe/src/gameLogic.ts":
/*!*****************************************!*\
  !*** ./lab3-tictactoe/src/gameLogic.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar GameLogic = /** @class */ (function () {\r\n    function GameLogic() {\r\n        this.turn = \"X\";\r\n        // this.board = new Array(9).fill(null);\r\n        this.board = new Array(9);\r\n    }\r\n    GameLogic.prototype.nextTurn = function () {\r\n        if (this.turn == \"X\") {\r\n            this.turn = \"O\";\r\n        }\r\n        else {\r\n            this.turn = \"X\";\r\n        }\r\n    };\r\n    GameLogic.prototype.makeMove = function (i) {\r\n        if (this.endOfGame()) {\r\n            return;\r\n        }\r\n        if (this.board[i]) {\r\n            return;\r\n        }\r\n        this.board[i] = this.turn;\r\n        var winningCombination = this.findWinCondition();\r\n        if (!winningCombination) {\r\n            this.nextTurn();\r\n        }\r\n    };\r\n    GameLogic.prototype.findWinCondition = function () {\r\n        var winCombinations = [\r\n            [0, 1, 2],\r\n            [3, 4, 5],\r\n            [6, 7, 8],\r\n            [0, 3, 6],\r\n            [1, 4, 7],\r\n            [2, 5, 8],\r\n            [0, 4, 8],\r\n            [6, 4, 2],\r\n        ];\r\n        for (var _i = 0, winCombinations_1 = winCombinations; _i < winCombinations_1.length; _i++) {\r\n            var combination = winCombinations_1[_i];\r\n            var a = combination[0], b = combination[1], c = combination[2];\r\n            if (this.board[a] &&\r\n                this.board[a] === this.board[b] &&\r\n                this.board[a] === this.board[c]) {\r\n                return combination;\r\n            }\r\n        }\r\n        return null;\r\n    };\r\n    GameLogic.prototype.endOfGame = function () {\r\n        var winningCombination = this.findWinCondition();\r\n        if (winningCombination) {\r\n            return true;\r\n        }\r\n        else {\r\n            return false;\r\n        }\r\n    };\r\n    return GameLogic;\r\n}());\r\nexports.default = GameLogic;\r\n\n\n//# sourceURL=webpack:///./lab3-tictactoe/src/gameLogic.ts?");

/***/ }),

/***/ "./lab3-tictactoe/src/gameView.ts":
/*!****************************************!*\
  !*** ./lab3-tictactoe/src/gameView.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar GameView = /** @class */ (function () {\r\n    function GameView() {\r\n    }\r\n    GameView.prototype.updateBoard = function (game) {\r\n        this.updateTurn(game);\r\n        var winCombination = game.findWinCondition();\r\n        for (var i = 0; i < game.board.length; i++) {\r\n            var tile = document.querySelector(\".tile[tabindex=\\\"\" + i + \"\\\"]\");\r\n            tile.textContent = game.board[i];\r\n            tile.classList.remove(\"tileWinner\");\r\n            var tileType = game.board[i] == \"X\" ? \"tileX\" : \"tileO\";\r\n            tile.innerHTML = \"<span class=\\\"\" + tileType + \"\\\">\" + (game.board[i] ? game.board[i] : \"\") + \"</span>\";\r\n            if (winCombination && winCombination.includes(i)) {\r\n                tile.classList.add(\"tileWinner\");\r\n            }\r\n        }\r\n    };\r\n    GameView.prototype.updateTurn = function (game) {\r\n        var playerX = document.querySelector(\".playerX\");\r\n        var playerO = document.querySelector(\".playerO\");\r\n        playerX === null || playerX === void 0 ? void 0 : playerX.classList.remove(\"active\");\r\n        playerO === null || playerO === void 0 ? void 0 : playerO.classList.remove(\"active\");\r\n        if (game.turn == \"X\") {\r\n            playerX === null || playerX === void 0 ? void 0 : playerX.classList.add(\"active\");\r\n        }\r\n        else {\r\n            playerO === null || playerO === void 0 ? void 0 : playerO.classList.add(\"active\");\r\n        }\r\n    };\r\n    return GameView;\r\n}());\r\nexports.default = GameView;\r\n\n\n//# sourceURL=webpack:///./lab3-tictactoe/src/gameView.ts?");

/***/ }),

/***/ "./lab3-tictactoe/src/tictactoe.ts":
/*!*****************************************!*\
  !*** ./lab3-tictactoe/src/tictactoe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.TicTacToe = void 0;\r\nvar board_1 = __webpack_require__(/*! ./board */ \"./lab3-tictactoe/src/board.ts\");\r\nvar gameLogic_1 = __webpack_require__(/*! ./gameLogic */ \"./lab3-tictactoe/src/gameLogic.ts\");\r\nvar gameView_1 = __webpack_require__(/*! ./gameView */ \"./lab3-tictactoe/src/gameView.ts\");\r\nvar TicTacToe = /** @class */ (function () {\r\n    function TicTacToe() {\r\n        this.name = \"Kółko i krzyżyk\";\r\n        this.board = new board_1.default();\r\n        this.board.CreateBoard();\r\n    }\r\n    TicTacToe.prototype.getGameElement = function () {\r\n        var div = document.createElement('div');\r\n        div.appendChild(document.createTextNode(\"Hello TicTacToes\"));\r\n        return div;\r\n    };\r\n    return TicTacToe;\r\n}());\r\nexports.TicTacToe = TicTacToe;\r\nvar appStart = new TicTacToe();\r\n// appStart.CreateBoard();\r\nvar game = new gameLogic_1.default();\r\nvar gameView = new gameView_1.default();\r\ndocument.querySelector(\".startButton\").addEventListener(\"click\", function () {\r\n    console.log(\"new game startButton\");\r\n    restartGame();\r\n});\r\nvar tiles = document.querySelectorAll(\".tile\");\r\ntiles.forEach(function (tile) {\r\n    tile.addEventListener(\"click\", function () {\r\n        onTileClick(tile.tabIndex);\r\n    });\r\n});\r\nfunction onTileClick(i) {\r\n    game.makeMove(i);\r\n    gameView.updateBoard(game);\r\n}\r\nfunction restartGame() {\r\n    game = new gameLogic_1.default();\r\n    gameView.updateBoard(game);\r\n}\r\ngameView.updateBoard(game);\r\n\n\n//# sourceURL=webpack:///./lab3-tictactoe/src/tictactoe.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./lab3-tictactoe/src/tictactoe.ts");
/******/ 	
/******/ })()
;