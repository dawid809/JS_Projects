import Board from "./board";
import GameLogic from "./gameLogic";
import GameView from "./gameView";
import { Game } from "../../game.model";

export class TicTacToe {
  board: Board;
  constructor() {
    this.board = new Board();
    this.board.CreateBoard();
  }
}

let game = new GameLogic();
let gameView = new GameView();

document.querySelector(".startButton").addEventListener("click", () => {
  console.log("new game startButton");
  restartGame();
});

const tiles = document.querySelectorAll(
  ".tile"
) as any as Array<HTMLDivElement>;
tiles.forEach((tile: any) => {
  tile.addEventListener("click", () => {
    onTileClick(tile.tabIndex);
  });
});

function onTileClick(i: string) {
  game.makeMove(i);
  gameView.updateBoard(game);
}

function restartGame() {
  game = new GameLogic();
  let winSign = document.querySelector(".winner");
  winSign.innerHTML = "";
  gameView.updateBoard(game);
}

gameView.updateBoard(game);
