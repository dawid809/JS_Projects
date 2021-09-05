import { FizzBuzz } from './fizzBuzz';

describe('FizzBuzzz test', () => {
    let fizzBuzz: FizzBuzz;
    
    beforeEach(() => {
    })

    it('should return corret string of characters', () => {
        fizzBuzz = new FizzBuzz();
        const corretResultStringOfCharacters = fizzBuzz.GenerateString(33);

        expect(fizzBuzz).toBeInstanceOf(FizzBuzz);
        expect(corretResultStringOfCharacters).toBe('1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz 31 32 Fizz');
    })
})