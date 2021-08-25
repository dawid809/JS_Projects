// Zadanie 1 początek
// const personNamee = "John";
// document.body.innerHTML = `<h1>Hello ${personNamee}</h1>`;
   
// Zadanie 1 rozbudowane
class Person {
  imie: string;
  nazwisko: string;
  wiek: number;

  constructor(imie: string, nazwisko: string, wiek: number) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wiek = wiek;
  }

  Show() {
   return document.body.innerHTML = `<h1>Witaj ${this.imie} ${this.nazwisko} mam ${this.wiek} lat</h1>`;
  }
}
let p = new Person("John", "Blake", 11);

p.Show();
