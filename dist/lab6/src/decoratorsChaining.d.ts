declare function admin(target: object, propKey: string, descriptor: PropertyDescriptor): PropertyDescriptor;
declare function moderator(target: object, propKey: string, descriptor: PropertyDescriptor): PropertyDescriptor;
declare function watch(target: object, propKey: string, descriptor: PropertyDescriptor): PropertyDescriptor;
declare class Person3 {
    private lastName;
    constructor(name: string);
    setLastName(lastName: string, ...permSet: any): string;
}
declare const p3: Person3;
