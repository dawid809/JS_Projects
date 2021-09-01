import { Guid } from '../src/guid';
import { Note } from './note';
import { NoteStore } from './notestore';

export class SessionStorageStore implements NoteStore {
    deleteNote(id: Guid): void {
       let noteId = id;
       const sessionStorageKey = 'notesSessionStorage';

       let notesValue =JSON.parse(sessionStorage.getItem(sessionStorageKey));
       let index = notesValue.findIndex(id => id.id == noteId);

       notesValue.splice(index, 1);

       sessionStorage.setItem('notesSessionStorage', JSON.stringify(notesValue));
    }

    public addNote(note: Note): void {
        const sessionStorageKey = 'notesSessionStorage';

      let notesValue = <string>sessionStorage.getItem(sessionStorageKey);

      let notes: Note[];
      notes = <Note[]>JSON.parse(notesValue)

      if (!notes) 
          notes = []
      notes.push(note);
      sessionStorage.setItem(sessionStorageKey, JSON.stringify(notes));
    }

    public getNotes(): Note[] {
        const sessionStorageKey = 'notesSessionStorage';

        let notesValue = <string>sessionStorage.getItem(sessionStorageKey);
        return <Note[]>JSON.parse(notesValue)
    }
}