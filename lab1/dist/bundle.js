/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lab1/src/index.ts":
/*!***************************!*\
  !*** ./lab1/src/index.ts ***!
  \***************************/
/***/ (function() {

eval("// Zadanie 1 początek\r\n// const personNamee = \"John\";\r\n// document.body.innerHTML = `<h1>Hello ${personNamee}</h1>`;\r\nvar __spreadArray = (this && this.__spreadArray) || function (to, from) {\r\n    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)\r\n        to[j] = from[i];\r\n    return to;\r\n};\r\n// Zadanie 1 rozbudowane\r\nvar Personn = /** @class */ (function () {\r\n    function Personn(imie, nazwisko, wiek) {\r\n        this.imie = imie;\r\n        this.nazwisko = nazwisko;\r\n        this.wiek = wiek;\r\n    }\r\n    Personn.prototype.Show = function () {\r\n        return document.body.innerHTML = \"<h1>Witaj \" + this.imie + \" \" + this.nazwisko + \" mam \" + this.wiek + \" lat</h1>\";\r\n    };\r\n    return Personn;\r\n}());\r\nvar p = new Personn(\"John\", \"Blake\", 11);\r\np.Show();\r\nvar users = [\r\n    { name: 'John', surname: 'Smith', age: 43, role: 'admin' },\r\n    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user' },\r\n    { name: 'Amdy', surname: 'Cole', age: 18, role: 'user' },\r\n];\r\nvar admins = [\r\n    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin' },\r\n    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin' },\r\n];\r\nfunction logPerson(person) {\r\n    console.log(person.name + \" \" + person.surname + \", \" + person.age + \", \" + person.role);\r\n    //    users.forEach(logPerson);\r\n    //    admins.forEach(logPerson);\r\n}\r\nfunction filterPersons(persons, criteria) {\r\n    return persons.filter(function (o) {\r\n        return Object.keys(o).some(function (k) { return o[k].includes(criteria.toLowerCase()); });\r\n    });\r\n}\r\n//1.\r\nconsole.log('Kolejno  osoby z tablicy Users:');\r\nusers.forEach(logPerson);\r\nconsole.log('\\nKolejno osoby  z tablicy Admins:');\r\nadmins.forEach(logPerson);\r\n//2.\r\nvar persons = __spreadArray(__spreadArray([], users), admins);\r\nconsole.log('\\nPołączenie dwóch tablic:');\r\nconsole.log(persons);\r\n//3.\r\nconsole.log('\\nWszystkie osoby w wieku powyżej 25 lat:');\r\nconsole.log(persons.filter(function (x) { return x.age >= 25; }));\r\n//4.\r\nconsole.log('\\nOsoby o imieniu Adam:');\r\nconsole.log(filterPersons(persons, { name: 'Adam' }));\r\n\n\n//# sourceURL=webpack:///./lab1/src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./lab1/src/index.ts"]();
/******/ 	
/******/ })()
;