const reverseString = require('./reverseString');

test('it returns a string reversed', () => {
    expect(reverseString('string')).toBe('gnirts');
})