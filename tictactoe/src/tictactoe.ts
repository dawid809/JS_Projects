import Board from './board'
import GameLogic from "./gameLogic";
import GameView from "./gameView";
import { Game } from '../../game.model';

export class TicTacToe implements Game{
  name: string;
  board: Board;
  constructor() {
    this.name = "Kółko i krzyżyk"
    this.board = new Board();
    this.board.CreateBoard();
  }

  getGameElement(): HTMLElement {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode("Hello TicTacToes"));
//   div.style.background= 'blue';
//   div.style.height= '500px';
    return div;
}

  //   CreateBoard() {

  //     // Game Wrapper
  //     const wrapper = <HTMLDivElement>document.createElement("div");
  //     wrapper.className = "wrapper";
  //     const gameWrapper = <HTMLDivElement>document.createElement("div");
  //     gameWrapper.className = "gameWrapper";
  //     const header = <HTMLDivElement>document.createElement("div");
  //     header.className = "header";

  //     document.body.appendChild(wrapper);
  //     wrapper.appendChild(header);
  //     wrapper.appendChild(gameWrapper);

  //     // Game Header and Title
  //     const title = <HTMLElement>document.createElement("h1");
  //     title.textContent = "Zagrajmy w Kołko i krzyżyk";
  //     const startButton = <HTMLButtonElement>document.createElement("button");
  //     startButton.className = "startButton";
  //     startButton.textContent = "Start New Game";

  //     header.appendChild(title);
  //     header.appendChild(startButton);

  //     // Game Wrapper PlayerX and PlayerO
  //     const gameHeader = <HTMLDivElement>document.createElement("div");
  //     gameHeader.className = "gameHeader";
  //     const spanX = <HTMLSpanElement>document.createElement("span");
  //     const spanO = <HTMLSpanElement>document.createElement("span");
  //     const playerX = <HTMLDivElement>document.createElement("div");
  //     playerX.className = "playerX";
  //     spanX.textContent = "Player X";
  //     spanO.textContent = "Player O";
  //     const playerO = <HTMLDivElement>document.createElement("div");
  //     playerO.className = "playerO";

  //     gameWrapper.appendChild(gameHeader);
  //     gameHeader.appendChild(playerX);
  //     playerX.appendChild(spanX);
  //     gameHeader.appendChild(playerO);
  //     playerO.appendChild(spanO);

  //     // Board

  //     const board = <HTMLDivElement>document.createElement("div");
  //     board.className = "board";

  //     gameWrapper.appendChild(board);

  //     for (let i = 0; i < 9; i++) {
  //       const tile = <HTMLDivElement>document.createElement("div");
  //       tile.className = "tile";
  //       tile.tabIndex = i;
  //       console.log(i, "index");
  //       board.appendChild(tile);
  //     }
  //   }
}

let appStart = new TicTacToe();
// appStart.CreateBoard();
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
    // console.log(tile.tabIndex);
  });
});

function onTileClick(i: string) {
  game.makeMove(i);
  gameView.updateBoard(game);
}

function restartGame() {
  game = new GameLogic();
  gameView.updateBoard(game);
}

gameView.updateBoard(game);
