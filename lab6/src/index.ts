enum Role {
    Standard = 'Standard',
    Moderator = 'Moderator',
    Admin = 'Admin',
}

function StandardAccess(constructorFn: Function): void {    
    constructorFn.prototype.role = Role.Standard;
}

function ModeratorAccess(constructorFn: Function): void { 
    constructorFn.prototype.role = Role.Moderator;
}

function AdminAccess(constructorFn: Function): void {
    constructorFn.prototype.role = Role.Admin;
}

function watch(target: object, propKey: string, descriptor: PropertyDescriptor) {
    const originalFn = target[propKey];
    descriptor.value = function(param) {
        console.log(`User: ${param} wants ${propKey}`);
        return originalFn.call(this, param);
 };
}

function forAdmin(target: object, propKey: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;
    descriptor.value = function(param) {
        if (param.role === Role.Admin) {
            console.log('For admin', param);
            return method.call(this, param);
        } else {
            return null;
        }
    }
}

function forModerator(target: object, propKey: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;

    descriptor.value = function(param) {
        if (param.role === Role.Moderator) {
            console.log('For moderator', param.role);
            return method.call(this, param);
        } else {
            return null;
        }
    }
}

class User {
    name: string;
    surname: string;
    role: Role;

    toString(): string {
        return `${this.name} ${this.surname} ${this.role}`;
    }
}

@StandardAccess
class StandardUser extends User {

    constructor(name: string, surname: string) {
        super();
        this.name = name;
        this.surname = surname;
    }
}

@ModeratorAccess
class ModeratorUser extends User {

    constructor(name: string, surname: string) {
        super();
        this.name = name;
        this.surname = surname;
    }
}

@AdminAccess
class AdminUser extends User {

    constructor(name: string, surname: string) {
        super();
        this.name = name;
        this.surname = surname;
    }
}

class Resource {
    private resourceValue: string;
    constructor() {
        this.resourceValue = 'resource value';
    }

    @watch
    @forModerator
    @forAdmin
    public read(user: User): void {
        if (user.role === Role.Moderator || user.role === Role.Admin) {
            console.log(this.resourceValue);
        }
    }

    @watch
    @forAdmin
    public change (user: User): void {
        if (user.role === Role.Admin) {
            this.resourceValue = 'changed resource value';
        }
    }
}

const user1 = new StandardUser('Luke', 'Skywalker');
const user2 = new ModeratorUser('Han', 'Solo');
const user3 = new AdminUser('Obi-Wan', 'Kenobi');

const resource = new Resource();

console.log(user1.toString());
console.log(user2.toString());
console.log(user3.toString());

console.log('User 1:')
resource.read(user1);
resource.change(user1);

console.log('User 2:');
resource.read(user2);
resource.change(user2);
resource.read(user3);

console.log('User 3:')
resource.change(user3);
resource.read(user3);