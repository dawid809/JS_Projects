import {Game} from '../game.model';
import GameView from "./gamieView";
import GameLogic from "./gameLogic";
export class TicTacToe implements Game {
    name: string;
    tictactoe: TicTacToe;
    gameView: GameView;
    gameLogic: GameLogic;
    constructor() {
        this.name = "Kółko i krzyżyk"
    }

    getGameElement(): HTMLElement {
     const mainDiv = document.createElement('div');
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
 
     // Board and winner
     const board = <HTMLDivElement>document.createElement("div");
     board.className = "board";
     const winner = <HTMLDivElement>document.createElement("div");
     winner.className = "winner";
 
     gameWrapper.appendChild(board);
     gameWrapper.appendChild(winner);
 
     for (let i = 0; i < 9; i++) {
       const tile = <HTMLDivElement>document.createElement("div");
       tile.className = "tile";
       tile.tabIndex = i;
       console.log(i, "index");
       board.appendChild(tile);
     }

     this.tictactoe = new TicTacToe();
     this.gameView = new GameView();
     this.gameLogic = new GameLogic();

     document.querySelector(".startButton").addEventListener("click", () => {
        console.log("Restart game button clicked!");
        this.restartGame();
      });
      
      const tiles = document.querySelectorAll(
        ".tile"
      ) as any as Array<HTMLDivElement>;
      tiles.forEach((tile: any) => {
        tile.addEventListener("click", () => {
       console.log(tile.tabIndex)
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

      restartGame() {
        this.gameLogic = new GameLogic();
        let winSign = document.querySelector(".winner");
        winSign.innerHTML = "";
        this.gameView.updateBoard(this.gameLogic);
      }
}


