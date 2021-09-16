var Sex;
(function (Sex) {
    Sex["Male"] = "Male";
    Sex["Female"] = "Female";
})(Sex || (Sex = {}));
var Person = /** @class */ (function () {
    function Person(imie, nazwisko, sex, wiek) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.sex = sex;
        this.wiek = wiek;
    }
    Person.prototype.logName = function () {
        return this.imie + " " + this.nazwisko;
    };
    Person.prototype.consoleLogName = function () {
        console.log(this.imie + " " + this.nazwisko);
    };
    Person.prototype.is18 = function () {
        if (this.wiek >= 18)
            return true;
        else
            return false;
    };
    return Person;
}());
var persons2 = [];
// for(let person in persons2) {
//     console.log(person => person.is18() == true)
// }
for (var i = 0; i < 100; i++) {
    var name_1 = "Jan" + i;
    var surname = "Kowalksi" + i + ";";
    var wiek = i;
    var person = new Person(name_1, surname, Sex.Male, i);
    persons2.push(person);
    console.log(person);
}
persons2.forEach(function (person) { return console.log(person.is18()); });
var lsKey = 'persons';
localStorage.setItem(lsKey, JSON.stringify(persons2));
localStorage.getItem(lsKey);
