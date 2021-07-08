const { expect } = require("@jest/globals");
const { number } = require("yargs");
const sum = require("./sum");

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
})

test('object assignment', () => {
    const data = { "one": 1};
    data["two"] = 2;
    expect(data).toEqual({one: 1, two: 2});
});

test('adding positive numbers is not a 0', () => {
    for(let i = 1; i < 10; ++i) {
        for(let j = 1; j < 10; ++j) {
            expect( i + j ).not.toBe(0);
        }
    }
});

//Numbers

test('two plus two ', () => {
    const sum = 2 + 2;
    const floatNumber = 0.1 + 0.2;
    expect(sum).toBeGreaterThan(3);
    expect(sum).toBeLessThan(5);
    expect(sum).toBe(4);
    expect(sum).toEqual(4);
    expect(floatNumber).toBeCloseTo(0.3);
});

//Strings

test('if there is Z in Snehdeep', () => {
    expect('Snehdeep').not.toMatch(/Z/);
    expect('Snehdeep').toMatch(/deep/);
})

//Arrays and iterables

const numbers = [
    'one',
    'two',
    'three'
]

test('numbers contains two', () => {
    expect(numbers).toContain('two');
});

//Exceptions