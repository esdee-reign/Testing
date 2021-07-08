const { expect } = require("@jest/globals");
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