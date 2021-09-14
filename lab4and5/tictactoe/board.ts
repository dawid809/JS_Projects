export default class Board {
    CreateBoard() {

      const mainDiv = document.querySelector('.main-div');
     
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
      line.className = 'line';
      const winner = <HTMLDivElement>document.createElement("div");
      winner.className = "winner";
      const backMove = <HTMLButtonElement>document.createElement("button");
      backMove.className = 'back-move';
      backMove.textContent = "Move";

      // Save and load button
      const buttonsWrapper = <HTMLDivElement>document.createElement("div");
      buttonsWrapper.className = "buttons-wrapper";
      const saveButton = <HTMLButtonElement>document.createElement("button");
      saveButton.className = 'save-button'
      saveButton.textContent = 'Save'
      const loadButton = <HTMLButtonElement>document.createElement("button");
      loadButton.className = 'load-button';
      loadButton.textContent = 'Load'

      gameWrapper.appendChild(board);
      gameWrapper.appendChild(line);
      gameWrapper.appendChild(backMove)
      gameWrapper.appendChild(winner);
      buttonsWrapper.appendChild(saveButton);
      buttonsWrapper.appendChild(loadButton)
      gameWrapper.appendChild(buttonsWrapper)
  
      for (let i = 0; i < 9; i++) {
        const tile = <HTMLDivElement>document.createElement("div");
        tile.className = "tile";
        tile.tabIndex = i;
        console.log(i, "index");
        board.appendChild(tile);
      }
    }
  }
  