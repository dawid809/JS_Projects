 function admin(target: object, propKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
     console.log('Admin decorator: ', target, propKey, descriptor);
     const medhod = descriptor.value;

     descriptor.value = function(...args: any[]) {
        console.log('ADMIN DECORATOR DESCRIPTOR CALL', args);
        const permSet = 'admin';

        const result = medhod.apply(this, [args, permSet]);
        console.log('MODERATOR DESCRIPTOR CALL', result);
        return result;
     }
     
     return descriptor;
 }

 function moderator (target: object, propKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    console.log('Moderator decorator: ', target, propKey, descriptor);
    const medhod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        console.log('MODERATOR DECORATOR DESCRIPTOR CALL', args);
        const permSet = 'mod';
        const result = medhod.apply(this, [...args, permSet]);
        console.log('MODERATOR DECORATOR Call');
        return result;
    }
    return descriptor;
 }

 function watch2(target: object, propKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
     console.log('WATCH DECORATOR', target, propKey, descriptor);
     const medhod = descriptor.value;

     descriptor.value = function(...args: any[]) {
         console.log('METHOD DECORATOR DESCRIPTOR CALL', args);
         const permSet = "watch";
         const result = medhod.apply(this, [...args, permSet]);
         console.log('WATCH DECORATOR Call');
         return result;
     }
     return descriptor;
 }

 class Person3 {
     private lastName: string;
     constructor(name: string) {
         this.lastName = name;
        console.warn('from constructor, name: ', name);
     }

     @admin
     @moderator
     @watch2
     setLastName(lastName: string, ...permSet: any): string {
        console.warn('from setLastName', this.lastName);
        console.warn({permSet});
        return "I'm " + lastName; 
     }
 }

 const p3 = new Person3('kate');
console.warn(p3.setLastName('bush'));
