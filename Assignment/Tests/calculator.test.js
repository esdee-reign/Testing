const calculator = require("../Code/calculator");

test('calculates addition', () => {
    expect(calculator.add(5, 6)).toEqual(11);
});

test('calculates subtraction', () => {
    expect(calculator.sub(6, 5)).toEqual(1);
});

test('calculates multiplication', () => {
    expect(calculator.mul(5, 6)).toEqual(30);
});

test('calculates division', () => {
    expect(calculator.div(6, 2)).toEqual(3);
});