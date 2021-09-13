import {Game} from '../game.model';
import logCallGameStart from '../decorators/log'
import countGameStart from '../decorators/count';
import {disable} from '../decorators/disable';

// @isDisabled(true)
@disable
export class BattleShips implements Game {
    name: string;
    count: number = 0;
    available: boolean;
    constructor() {
        this.name = 'Statki';
    }
    @countGameStart
    @logCallGameStart
    getGameElement(): HTMLElement {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode("Hello BattleShips"));
        return div;
    }
}