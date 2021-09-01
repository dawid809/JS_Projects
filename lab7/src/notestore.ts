import { Guid } from '../src/guid';
import { Note } from '../src/note';

export interface NoteStore {
    addNote(note: Note): void;
    getNotes(): Note[];
    deleteNote(id: Guid): void;
}