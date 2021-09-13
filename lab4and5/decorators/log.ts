export default function logCallGameStart(target: object, propKey: string, descriptor: PropertyDescriptor) {
    const originalFn = target[propKey];
    descriptor.value = function(param) {
        console.log(`Wywołałeś następującą grę: ${this.name}`);
        return originalFn.call(this, param);
    }
}