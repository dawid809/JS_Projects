import { Guid } from '../src/guid';

export class Note {
    id: Guid;
    tittle: string;
    content: string;
    createdAt: Date;
    constructor(tittle: string, content: string) {
        this.id = Guid.NewGuid();
        this.tittle = tittle;
        this.content = content;
        this.createdAt = new Date();
    }
}