export default function Confirmable(message: string) {
    return function (target: Object, key: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;
        descriptor.value = function (param) {
            const allow = confirm(message)

            if(allow) {
                const result = original. apply(this, param);
                return result;
            }
            else return null;
        }
    }
}