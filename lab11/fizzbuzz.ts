export class FizzBuzz {
    constructor() {
    }
  GenerateString(number : number): String {
      let stringChar = '';

       for (let i = 1; i <= number; i++){
           
        if( (i % 3 == 0) && (i % 5 == 0) ) {
            stringChar += 'FizzBuzz ';
        }
        else if (i % 3 == 0) {
            stringChar += 'Fizz ';
        }
        else if (i % 5 == 0) {
            stringChar+= 'Buzz ';
        }
        else stringChar += `${i.toString()} `;
       }
       return stringChar.trim() as string;
    };
}

let fizzBuzz = new FizzBuzz();

console.log(fizzBuzz.GenerateString(33));
