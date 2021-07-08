const reverseString = require("../Code/reverseString")

test('if string is reversed', () => {
    expect(reverseString("hello")).toBe('olleh');
});