export default function countGameStart(target: object, propKey: string, descriptor: PropertyDescriptor) {
    const originalFn = target[propKey];
    descriptor.value = function(param) {
        this.count ++;
        console.log(`Wywołałeś grę: ${this.name} ${this.count} razy!`);
        return originalFn.call(this, param);
    }
}
