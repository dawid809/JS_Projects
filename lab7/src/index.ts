import { NoteBoard } from '../src/noteBoard';
import '../styles/style.scss'
// import * as styles from '../styles/styles.scss'
const noteWrapper = <HTMLDivElement>(document.createElement('div'));
document.body.appendChild(noteWrapper);
noteWrapper.className = 'note-wrapper'

let board = new NoteBoard();
board.refreshList();