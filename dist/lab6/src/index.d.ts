declare function StandardAccess(constructorFn: Function): void;
declare function ModeratorAccess(constructorFn: Function): void;
declare function AdminAccess(constructorFn: Function): void;
declare function watch2(target: object, propKey: string, descriptor: PropertyDescriptor): void;
declare enum Role {
    Standard = "Standard",
    Moderator = "Moderator",
    Admin = "Admin"
}
declare class User {
    name: string;
    surname: string;
    role: Role;
    toString(): string;
}
declare class StandardUser extends User {
    constructor(name: string, surname: string);
}
declare class ModeratorUser extends User {
    constructor(name: string, surname: string);
}
declare class AdminUser extends User {
    constructor(name: string, surname: string);
}
declare class Resource {
    private resourceValue;
    constructor();
    read(user: User): void;
    change(user: User): void;
}
declare const user1: StandardUser;
declare const user2: ModeratorUser;
declare const user3: AdminUser;
declare const resource: Resource;
