const calculator = require("./calculator");

describe('#sum', () => {
    test('it sums two numbers and returns the result', () => {
        expect(calculator.sum(2, 2)).toBe(4);
    })
});

describe('#subtract', () => {
    test('it subtracts two numbers and returns the result', () => {
        expect(calculator.subtract(2, 2)).toBe(0);
    })
});

describe('#multiply', () => {
    test('it multiplies two numbers and returns the result', () => {
        expect(calculator.multiply(2, 2)).toBe(4);
    })
});

describe('#divide', () => {
    test('it divides two numbers and returns the result', () => {
        expect(calculator.divide(2, 2)).toBe(1);
    })
})