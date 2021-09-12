import GameLogic from "./gameLogic";

export default class GameView {
  constructor() {}

  updateBoard(game: GameLogic): void {
    this.updateTurn(game);
    const winCombination = game.findWinCondition();
    for (let i = 0; i < game.board.length; i++) {
      const tile = document.querySelector(`.tile[tabindex="${i}"]`);
      tile.textContent = game.board[i];

      tile.classList.remove("tileWinner");

      let tileType = game.board[i] == "X" ? "tileX" : "tileO";
      tile.innerHTML = `<span class="${tileType}">${
        game.board[i] ? game.board[i] : ""
      }</span>`;

      if (winCombination && winCombination.includes(i)) {
        tile.classList.add("tileWinner");
        let winSign = document.querySelector(".winner");
        winSign.innerHTML = `The winner is player ${game.turn} !`;
      }
    }
  }

  updateTurn(game: GameLogic): void {
    let playerX = document.querySelector(".playerX");
    let playerO = document.querySelector(".playerO");

    playerX?.classList.remove("active");
    playerO?.classList.remove("active");

    if (game.turn == "X") {
      playerX?.classList.add("active");
    } else {
      playerO?.classList.add("active");
    }
  }
}
