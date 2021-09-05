import { Calculator } from './calculator';

describe('Calc1 SUM', () => {
    let calculator: Calculator;

    beforeEach(() => {
        // calculator = new Calculator();
    });

    it('should return correct sum of two numbers', () => {
        calculator = new Calculator();

        const result = calculator.Add(2, 3);

        expect(calculator).toBeInstanceOf(Calculator);
        expect(result).toEqual(5);
    });
});

describe('Calc2 SUBSTRACT', () => {
    let calculator: Calculator;

    beforeEach(() => {
    });

    it('should return correct substract of two numbers', () => {
        calculator = new Calculator();

        const result = calculator.Substract(3, 2);

        expect(calculator).toBeInstanceOf(Calculator);
        expect(result).toEqual(1);
    });
});

describe('Calc3 Multiply', () => {
    let calculator: Calculator;

    beforeEach(() => {
    });

    it('should return correct multipler of two numbers', () => {
        calculator = new Calculator();

        const result = calculator.Multiply(3, 2);

        expect(calculator).toBeInstanceOf(Calculator);
        expect(result).toEqual(6);
    });
});

describe('Calc4 DIVIDE', () => {
    let calculator: Calculator;

    beforeEach(() => {
    });

    it('should return correct divide of two numbers', () => {
        calculator = new Calculator();

        const result = calculator.Divide(4, 2);

        expect(calculator).toBeInstanceOf(Calculator);
        expect(result).toEqual(2);
    });
});