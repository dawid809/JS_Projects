import GameView from "./gameView";
import {TicTacToe} from './tictactoe'
export default class GameLogic {
    turn: string;
    board;
    tictactoe: TicTacToe;
    gameView: GameView;
    ssKey: string = 'tictactoe';
    lsKey: string = 'tictactoe';
    constructor() {
      this.turn = "X";
      // this.board = new Array(9).fill(null);
      this.board = new Array(9);
    }
  
    nextTurn() {
      if (this.turn == "X") {
        this.turn = "O";
      } else {
        this.turn = "X";
      }
    }
  
    makeMove(i: any) {
      this.saveToSessionStorage();

      if (this.endOfGame()) {
        return;
      }
  
      if (this.board[i]) {
        return;
      }
      this.board[i] = this.turn;
      let winningCombination = this.findWinCondition();
  
      if (!winningCombination) {
        this.nextTurn();
      }
    }
  
    findWinCondition() {
      const winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2],
      ];
  
      for (const combination of winCombinations) {
        const [a, b, c] = combination;
  
        if (
          this.board[a] &&
          this.board[a] === this.board[b] &&
          this.board[a] === this.board[c]
        ) {
          return combination;
        }
      }
      return null;
    }
  
    endOfGame() {
      let winningCombination = this.findWinCondition();
      if (winningCombination) {
        return true;
      } else {
        return false;
      }
    }

    saveToSessionStorage() {
     sessionStorage.setItem(this.ssKey, JSON.stringify(this.board));
    }

     saveToLocalStorage() {
       localStorage.setItem(this.lsKey, JSON.stringify(this.board));
     }
  }
  