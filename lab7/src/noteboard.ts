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
        this.addTitleInput();
        this.addContentInput();
        this.addButtton();
        this.notesContainer = <HTMLDivElement>(document.createElement('div'));
        document.body.appendChild(this.notesContainer);
    }

    private addTitleInput(): void {
        const div = <HTMLInputElement>(document.createElement('div'));
        const span = <HTMLInputElement>(document.createElement('span'));
        span.textContent = 'Title:';
        const titleInput = <HTMLInputElement>(document.createElement('input'));
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('id', 'title');
        div.appendChild(span);
        div.appendChild(titleInput);
        document.body.appendChild(div);
    }

    private addContentInput(): void {
        const div = <HTMLInputElement>(document.createElement('div'));
        const span = <HTMLInputElement>(document.createElement('span'));
        span.textContent = 'Content';
        const contentInput = <HTMLTextAreaElement>(document.createElement('textarea'));
        contentInput.setAttribute('id', 'content');
        div.appendChild(span);
        div.appendChild(contentInput);
        document.body.appendChild(div);
    }

    private addButtton(): void {
        const div = <HTMLInputElement>(document.createElement('div'));
        const addButtton = <HTMLButtonElement>(document.createElement('button'));
        addButtton.textContent = 'Add';
        addButtton.addEventListener ('click', () => {
            let title = (<HTMLInputElement>document.getElementById('title')).value;
            let content =  (<HTMLInputElement>document.getElementById('content')).value;
            this.storage.addNote(new Note(title, content));
            this.refreshList();
        });
        div.appendChild(addButtton);
        document.body.appendChild(div);
    }

    public refreshList(): void {
        this.notesContainer.innerHTML = '';
        const notes = <Note[]>this.storage.getNotes();
        if(!notes)
            return;
        notes.forEach( (item) => {
            const titleDiv = <HTMLDivElement>(document.createElement('div'));
            titleDiv.innerHTML = item.tittle;
            const contentDiv = <HTMLDivElement>(document.createElement('div'));
            contentDiv.innerHTML = item.content;
            const removeBtn = <HTMLButtonElement>(document.createElement('button'));
            removeBtn.textContent = 'Remove';
            removeBtn.setAttribute('data-id', item.id.toString());
            removeBtn.addEventListener('click', (e) => {
                const id = (<HTMLButtonElement>e.target).getAttribute('data-id')  as Guid;
                this.storage.deleteNote(id);
                this.refreshList();
            });
            this.notesContainer.appendChild(titleDiv);
            this.notesContainer.appendChild(contentDiv);
            this.notesContainer.appendChild(removeBtn);
            this.notesContainer.appendChild(document.createElement('hr'));
        }, this);
    }
}