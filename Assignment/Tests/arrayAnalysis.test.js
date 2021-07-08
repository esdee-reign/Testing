const analysis = require("../Code/arrayAnalysis");

test('returns an object of tasks performed on given array', () => {
    expect(analysis([1, 1, 1, 1])).toEqual({average: 1, min: 1, max: 1, length: 4
    });
});
