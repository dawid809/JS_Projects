import { Games } from '../games.enum';
import { Game } from '../game.model';
import { TicTacToe } from '../tictactoe/tictactoe'
import { BattleShips } from '../battleships/batttleships';
import Switch from '../switch'
import '../styles/styles.scss';
class App {
    constructor() {
        this.init();
    }

    init(): void {
        const mainContainer = <HTMLDivElement>(document.createElement('div'));
        mainContainer.className = 'main';
        const menuContainer = <HTMLDivElement>(document.createElement('div'));
        menuContainer.className = 'menu';
        const gameContainer = <HTMLDivElement>(document.createElement('div'));
        gameContainer.className = 'game'
        const list = document.createElement('ul');
        const menuHeader = <HTMLDivElement>(document.createElement('div'));
        menuHeader.innerHTML = `<h1>Dostępne gry</h1>`;

         // TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum
        // zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą
        // samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer.
        // Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartościach enum'a

    // 4 iteracja po wszystkich enumach
    for (const games in Games) {
        if (isNaN(Number(games)))
        continue;
      
        const game = gameFactory.getGame(Number(games));

        if(game.available === false)
        continue;
        // let p = document.createElement('p');
        const item = document.createElement('li');
        item.appendChild(document.createTextNode(game.name));
        // list.innerHTML += (`<h1>${game.name}</h1>`)
        item.addEventListener('click', (event) => {
            // console.log(event.target);
            gameContainer.innerHTML = "";
            gameContainer.appendChild(game.getGameElement());
        })
        list.appendChild(item);
    //   console.log(game);
    }
    menuContainer.appendChild(menuHeader);
    menuContainer.appendChild(list);
    document.body.appendChild(mainContainer);
    document.body.appendChild(menuContainer);
    document.body.appendChild(gameContainer);

       new Switch();
    }
}

class GameFactory {
   getGame(game: Games): Game {
       switch(game) {
           case Games.TicTacToe:
               return new TicTacToe();
            case Games.BattleShips:
                return new BattleShips();
            default:    
                console.warn("Game not exist");
                break;
       }
   } 
}

const gameFactory = new GameFactory();
new App();