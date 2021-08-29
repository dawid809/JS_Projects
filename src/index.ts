// interface Person {
//     name: string;
//     surname: string;
//     age: number;
//     role: string;
// }

// const users: Person[] = [
//     { name: 'John', surname: 'Smith', age: 43, role: 'admin'},
//     { name: 'Adam', surname: 'Johnson', age: 35, role: 'user'},
//     { name: 'Amdy', surname: 'Cole', age: 18, role: 'user'},
// ]

// const admins: Person[] = [
//     { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin'},
//     { name: 'Adam', surname: 'Terry', age:24, role: 'admin'},
// ]

// function logPerson (person: Person) {
//     console.log(`${person.name} ${person.surname}, ${person.age}, ${person.role}`)
//     //    users.forEach(logPerson);
//     //    admins.forEach(logPerson);
// }

// function filterPersons(persons: Person[], criteria: any): Person[] {
//     return persons.filter(o =>
//         Object.keys(o).some(k => o[k].includes(criteria.toLowerCase())));
// }

// //1.
// console.log('Kolejno  osoby z tablicy Users:');
// users.forEach(logPerson);
// console.log('\nKolejno osoby  z tablicy Admins:');
// admins.forEach(logPerson);

// //2.
// let persons = [...users, ...admins];
// console.log('\nPołączenie dwóch tablic:');
// console.log(persons);

// //3.
// console.log('\nWszystkie osoby w wieku powyżej 25 lat:');
// console.log(persons.filter((x) => x.age >= 25));

// //4.
// console.log('\nOsoby o imieniu Adam:')
// console.log(filterPersons(persons, { name: 'Adam' }));


//Lab2
// import Animal from '../src/animal';
// import Snake from '../src/snake';
// import Horse from '../src/horse';


// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");

// sam.move();
// tom.move(34);

import { Games } from '../games.enum';
import { Game } from '../game.model';
import { TicTacToe } from '../tictactoe/tictactoe';
import { BattleShips } from '../battleships/batttleships';
import '../styles/styles.scss';
import { Console } from 'console';
class App {
    constructor() {
        this.init();
    }

    init(): void {
        const mainContainer = <HTMLDivElement>(document.createElement('div'));
        mainContainer.className = 'main';
        const menuContainer = <HTMLDivElement>(document.createElement('div'));
        menuContainer.className = 'menu';
        const menu2Container = <HTMLDivElement>(document.createElement('div'));
        menu2Container.className = 'menu2';
        menu2Container.innerHTML = "Menu 2!";
        const gameContainer = <HTMLDivElement>(document.createElement('div'));
        gameContainer.className = 'game'
        const list = document.createElement('ul');
        const menuHeader = <HTMLDivElement>(document.createElement('div'));
        menuHeader.innerHTML = `<h1>Dostępne gry</h1>`;

         // TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum
        // zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą
        // samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer.
        // Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartościach enum'a

//  for(let game in Games)
    // 4 iteracja po wszystkich enumach
    for (const games in Games) {
        if (isNaN(Number(games)))
        continue;
      
        const game = gameFactory.getGame(Number(games));
        // let p = document.createElement('p');
        const item = document.createElement('li');
        item.appendChild(document.createTextNode(game.name));
        // list.innerHTML += (`<h1>${game.name}</h1>`)
        item.addEventListener('click', (event) => {
            console.log(event.target);
            console.log('klik');
            gameContainer.innerHTML = "";
            gameContainer.appendChild(game.getGameElement());
        })
        list.appendChild(item);
      console.log(game);
    }
    menuContainer.appendChild(menuHeader);
    menuContainer.appendChild(list);
    document.body.appendChild(mainContainer);
    document.body.appendChild(menuContainer);
    document.body.appendChild(menu2Container);
    document.body.appendChild(gameContainer);

        const switcher = <HTMLButtonElement>(document.createElement('button'));
        switcher.className = 'switcher';
        switcher.textContent = "Switch theme";
        switcher.addEventListener('click', () => {
        console.log('change color!')
            if (document.body.hasAttribute('data-theme')) {
                document.body.removeAttribute('data-theme');
            } else {
                document.body.setAttribute('data-theme', 'dark')
            }
        })
        // menuContainer.appendChild(menuHeader);
        // menuContainer.appendChild(list);
        // document.body.appendChild(mainContainer);
        // document.body.appendChild(menuContainer);
        // document.body.appendChild(menu2Container);
        // document.body.appendChild(gameContainer);

        menuContainer.appendChild(switcher);
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