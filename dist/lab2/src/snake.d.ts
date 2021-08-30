import Animal from "./animal";
export default class Snake extends Animal {
    constructor(name: string);
    move(distanceInMeters?: number): void;
}
