import { Game } from "../game.model";
import GameView from "./gameView";
import GameLogic from "./gameLogic";
import logCallGameStart from "../decorators/log";
import confirmable from "../decorators/confirmable";

export class TicTacToe implements Game {
  name: string;
  tictactoe: TicTacToe;
  gameView: GameView;
  gameLogic: GameLogic;
  available: boolean;
  ssKey: string = "tictactoe";
  lsKey: string = "tictactoe";
  constructor() {
    this.name = "Kółko i krzyżyk";
  }

  @logCallGameStart
  getGameElement(): HTMLElement {
    const mainDiv = document.createElement("div");
    mainDiv.className = "main-div";
    // Game Wrapper
    const wrapper = <HTMLDivElement>document.createElement("div");
    wrapper.className = "wrapper";
    const gameWrapper = <HTMLDivElement>document.createElement("div");
    gameWrapper.className = "gameWrapper";
    const header = <HTMLDivElement>document.createElement("div");
    header.className = "header";

    document.body.appendChild(wrapper);
    wrapper.appendChild(header);
    wrapper.appendChild(gameWrapper);

    // Game Header and Title
    const title = <HTMLElement>document.createElement("h1");
    title.textContent = "Kółko i krzyżyk";
    const startButton = <HTMLButtonElement>document.createElement("button");
    startButton.className = "startButton";
    startButton.textContent = "New Game";

    header.appendChild(title);
    header.appendChild(startButton);

    // Game Wrapper PlayerX and PlayerO
    const gameHeader = <HTMLDivElement>document.createElement("div");
    gameHeader.className = "gameHeader";
    const spanX = <HTMLSpanElement>document.createElement("span");
    const spanO = <HTMLSpanElement>document.createElement("span");
    const playerX = <HTMLDivElement>document.createElement("div");
    playerX.className = "playerX";
    spanX.textContent = "Player X";
    spanO.textContent = "Player O";
    const playerO = <HTMLDivElement>document.createElement("div");
    playerO.className = "playerO";

    gameWrapper.appendChild(gameHeader);
    gameHeader.appendChild(playerX);
    playerX.appendChild(spanX);
    gameHeader.appendChild(playerO);
    playerO.appendChild(spanO);

    // Board and winner and back move
    const board = <HTMLDivElement>document.createElement("div");
    board.className = "board";
    const line = <HTMLDivElement>document.createElement("div");
    line.className = "line";
    const winner = <HTMLDivElement>document.createElement("div");
    winner.className = "winner";
    const backMove = <HTMLButtonElement>document.createElement("button");
    backMove.className = "back-move";
    backMove.textContent = "Move";

    // Save and load button
    const buttonsWrapper = <HTMLDivElement>document.createElement("div");
    buttonsWrapper.className = "buttons-wrapper";
    const saveButton = <HTMLButtonElement>document.createElement("button");
    saveButton.className = "save-button";
    saveButton.textContent = "Save";
    const loadButton = <HTMLButtonElement>document.createElement("button");
    loadButton.className = "load-button";
    loadButton.textContent = "Load";

    gameWrapper.appendChild(board);
    gameWrapper.appendChild(line);
    gameWrapper.appendChild(backMove);
    gameWrapper.appendChild(winner);
    buttonsWrapper.appendChild(saveButton);
    buttonsWrapper.appendChild(loadButton);
    gameWrapper.appendChild(buttonsWrapper);

    for (let i = 0; i < 9; i++) {
      const tile = <HTMLDivElement>document.createElement("div");
      tile.className = "tile";
      tile.tabIndex = i;
      //  console.log(i, "index");
      board.appendChild(tile);
    }

    this.tictactoe = new TicTacToe();
    this.gameView = new GameView();
    this.gameLogic = new GameLogic();

    document.querySelector(".startButton").addEventListener("click", () => {
      console.log("Restart game button clicked!");
      this.restartGame();
    });

    document.querySelector(".back-move").addEventListener("click", () => {
      console.log("back mvoe clikecd!");
      this.onBackMoveClick();
    });

    document.querySelector(".save-button").addEventListener("click", () => {
      console.log("Save button game button clicked!");
      this.gameLogic.nextTurn();
      this.gameLogic.saveToLocalStorage();
    });

    document.querySelector(".load-button").addEventListener("click", () => {
      console.log("Load button game button clicked!");
      this.gameLogic.nextTurn();
      this.loadFromLocalStorage();
    });

    const tiles = document.querySelectorAll(
      ".tile"
    ) as any as Array<HTMLDivElement>;
    tiles.forEach((tile: any) => {
      tile.addEventListener("click", () => {
        console.log(`Tile clicked: ${tile.tabIndex}`);
        this.onTileClick(tile.tabIndex);
      });
    });

    this.gameView.updateBoard(this.gameLogic);

    mainDiv.appendChild(wrapper);
    return mainDiv;
  }

  onTileClick(i: string) {
    this.gameLogic.makeMove(i);
    this.gameView.updateBoard(this.gameLogic);
  }
  @confirmable("Czy napewno chcesz zrestartować gre?")
  restartGame() {
    this.gameLogic = new GameLogic();
    let winSign = document.querySelector(".winner");
    winSign.innerHTML = "";
    this.gameView.updateBoard(this.gameLogic);
  }

  onBackMoveClick() {
    this.gameLogic.nextTurn();
    this.loadFromSessionStorage();
  }

  loadFromSessionStorage() {
    let myObject = JSON.parse(sessionStorage.getItem(this.ssKey));
    console.log("from ss", myObject);

    this.gameLogic.board = myObject;
    this.gameView.updateBoard(this.gameLogic);
  }

  loadFromLocalStorage() {
    let myObject = JSON.parse(localStorage.getItem(this.lsKey));
    console.log("from ls", myObject);

    this.gameLogic.board = myObject;
    this.gameView.updateBoard(this.gameLogic);
  }
}
