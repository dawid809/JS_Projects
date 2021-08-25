// Zadanie 1 początek
// const personNamee = "John";
// document.body.innerHTML = `<h1>Hello ${personNamee}</h1>`;
// Zadanie 1 rozbudowane
var Person = /** @class */ (function () {
    function Person(imie, nazwisko, lat) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wiek = lat;
    }
    Person.prototype.Show = function () {
        document.body.innerHTML = "<h1>Witaj " + this.imie + " " + this.nazwisko + " mam " + this.wiek + " lat</h1>";
    };
    return Person;
}());
var p = new Person("John", "Blake", 11);
p.Show();
