var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var users = [
    { name: 'John', surname: 'Smith', age: 43, role: 'admin' },
    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user' },
    { name: 'Amdy', surname: 'Cole', age: 18, role: 'user' },
];
var admins = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin' },
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin' },
];
function logPerson(person) {
    console.log(person.name + " " + person.surname + ", " + person.age + ", " + person.role);
    //    users.forEach(logPerson);
    //    admins.forEach(logPerson);
}
function filterPersons(persons, criteria) {
    return persons.filter(function (o) {
        return Object.keys(o).some(function (k) { return o[k].includes(criteria.toLowerCase()); });
    });
}
//1.
console.log('Kolejno  osoby z tablicy Users:');
users.forEach(logPerson);
console.log('\nKolejno osoby  z tablicy Admins:');
admins.forEach(logPerson);
//2.
var persons = __spreadArray(__spreadArray([], users), admins);
console.log('\nPołączenie dwóch tablic:');
console.log(persons);
//3.
console.log('\nWszystkie osoby w wieku powyżej 25 lat:');
console.log(persons.filter(function (x) { return x.age >= 25; }));
//4.
console.log('\nOsoby o imieniu Adam:');
console.log(filterPersons(persons, { name: 'Adam' }));
