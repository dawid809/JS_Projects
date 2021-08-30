 // Lab2 
import Animal from './animal';
import Snake from './snake';
import Horse from './horse';

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);