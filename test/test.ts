

enum Sex {
    Male = 'Male',
    Female = 'Female'
}

class Person {
    imie: string;
    nazwisko: string
    sex: Sex;
    wiek: number;

    constructor(imie: string, nazwisko: string, sex: Sex, wiek: number) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.sex = sex;
        this.wiek = wiek;
    }

    logName(): string {
        return `${this.imie} ${this.nazwisko}`;
    }

    consoleLogName(): void {
        console.log(`${this.imie} ${this.nazwisko}`);
    }

    is18(): boolean {
        if(this.wiek >= 18) return true;
        else return false;
    }
}


const persons2: Person[]= [
   
]


// for(let person in persons2) {
//     console.log(person => person.is18() == true)
// }
for(let i = 0; i < 100; i++) {
    let name = `Jan${i}`;
    let surname = `Kowalksi${i};`
    let wiek = i;
    let person = new Person(name, surname, Sex.Male, i);
    persons2.push(person);
    console.log(person)
}
persons2.forEach(person =>console.log( person.is18()));

let lsKey = 'persons'

localStorage.setItem(lsKey, JSON.stringify(persons2));

localStorage.getItem(lsKey);

