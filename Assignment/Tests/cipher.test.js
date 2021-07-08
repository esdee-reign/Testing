const cipher = require("../Code/cipher");

test('test hello world with key 0', () => {
    expect(cipher("hello", 0)).toBe("hello");
});

test('test hello world with key 2', () => {
    expect(cipher("hello", 2)).toBe("jgnnq");
});

test('test hello world with key 4', () => {
    expect(cipher("hello", 4)).toBe("lipps");
});