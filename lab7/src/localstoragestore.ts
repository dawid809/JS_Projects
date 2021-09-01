import { Guid } from '../src/guid';
import { Note } from '../src/note';
import { NoteStore } from '../src/notestore'

export class LocalStorageStore implements NoteStore {
    deleteNote(id: Guid): void {
        console.log('id: ',id);
        const notesValue = JSON.parse(localStorage.getItem('notes'));
       
        let index = notesValue.findIndex(el => el.id === id);
        notesValue.splice(index, 1);
        console.log('notesValue: ', notesValue);
    
        localStorage.setItem('notes', JSON.stringify(notesValue));
    }

    public addNote(note: Note): void {
       let notesValue = <string>localStorage.getItem('notes');

       let notes: Note[];
       notes = <Note[]>JSON.parse(notesValue);
       if (!notes) 
        notes = [];
       notes.push(note);
       localStorage.setItem('notes', JSON.stringify(notes));
    }

    public getNotes(): Note[] {
        let notesValue = <string>localStorage.getItem('notes');
        return <Note[]>JSON.parse(notesValue)
    }
}