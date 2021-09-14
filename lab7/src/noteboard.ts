import { Guid } from './guid';
import { LocalStorageStore } from './localstoragestore';
import { Note } from './note';
import { NoteStore } from './notestore';    
import { SessionStorageStore } from './sessionstoragestore';

export class NoteBoard {
    notesContainer : HTMLDivElement;
    storage: NoteStore;
    constructor() {
        this.storage = new  SessionStorageStore();
        // this.storage = new  LocalStorageStore();
        this.addTitleInput();
        this.addContentInput();
        this.addButtton();
        this.notesContainer = <HTMLDivElement>(document.createElement('div'));
        this.notesContainer.className = 'notes-container'
        document.body.appendChild(this.notesContainer);
    }

    private addTitleInput(): void {
        let noteWrapper = document.querySelector('.note-wrapper');
        const header = document.createElement('h1')
        header.textContent = 'Note'

        const div = <HTMLInputElement>(document.createElement('div'));
        div.className = 'tittle-wrapper'
        const span = <HTMLInputElement>(document.createElement('span'));
        span.textContent = 'Title: ';
        const titleInput = <HTMLInputElement>(document.createElement('input'));
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('id', 'title');
        div.appendChild(span);
        div.appendChild(titleInput);

        noteWrapper.appendChild(header);
        noteWrapper.appendChild(div);
    }

    private addContentInput(): void {
        let noteWrapper = <HTMLDivElement>document.querySelector('.note-wrapper');

        const div = <HTMLInputElement>(document.createElement('div'));
        div.className = 'content-wrapper';
        const span = <HTMLInputElement>(document.createElement('span'));
        span.textContent = 'Content: ';
        const contentInput = <HTMLTextAreaElement>(document.createElement('textarea'));
        contentInput.setAttribute('id', 'content');
        div.appendChild(span);
        div.appendChild(contentInput);

        noteWrapper.appendChild(div);
    }

    private addButtton(): void {
        let noteWrapper = document.querySelector('.note-wrapper');

        const div = <HTMLInputElement>(document.createElement('div'));
        const addButtton = <HTMLButtonElement>(document.createElement('button'));
        addButtton.className = 'add-button';
        addButtton.textContent = 'Add';
        addButtton.addEventListener ('click', () => {
            let title = (<HTMLInputElement>document.getElementById('title')).value;
            let content =  (<HTMLInputElement>document.getElementById('content')).value;
            this.storage.addNote(new Note(title, content));
            this.refreshList();
        });
        div.appendChild(addButtton);
        noteWrapper.appendChild(div);
    }

    public refreshList(): void {
        let singleNoteWrapper;

        this.notesContainer.innerHTML = '';
        const notes = <Note[]>this.storage.getNotes();
        if(!notes)
            return;
        notes.forEach( (item) => {
            const titleDiv = <HTMLDivElement>(document.createElement('div'));
            titleDiv.className = 'title-div'
            titleDiv.innerHTML = item.tittle;
            const contentDiv = <HTMLDivElement>(document.createElement('div'));
            contentDiv.innerHTML = item.content;
            contentDiv.className = 'content-div'
            const removeBtn = <HTMLButtonElement>(document.createElement('button'));
            removeBtn.textContent = 'Remove';
            singleNoteWrapper = document.createElement('div');
            this.notesContainer.appendChild(singleNoteWrapper);
            singleNoteWrapper.className = 'single-note-wrapper';
            removeBtn.setAttribute('data-id', item.id.toString());
            removeBtn.addEventListener('click', (e) => {
                const id = (<HTMLButtonElement>e.target).getAttribute('data-id')  as Guid;
                this.storage.deleteNote(id);
                this.refreshList();
            });
            
            singleNoteWrapper.appendChild(titleDiv);
            singleNoteWrapper.appendChild(contentDiv);
            singleNoteWrapper.appendChild(removeBtn);
        }, this);
    }
}