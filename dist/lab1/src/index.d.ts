declare class Personn {
    imie: string;
    nazwisko: string;
    wiek: number;
    constructor(imie: string, nazwisko: string, wiek: number);
    Show(): string;
}
declare let p: Personn;
interface Person {
    name: string;
    surname: string;
    age: number;
    role: string;
}
declare const users: Person[];
declare const admins: Person[];
declare function logPerson(person: Person): void;
declare function filterPersons(persons: Person[], criteria: any): Person[];
declare let persons: Person[];
