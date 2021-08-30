import Animal from "./animal";
export default class Horse extends Animal {
    constructor(name: string);
    move(distanceInMeters?: number): void;
}
