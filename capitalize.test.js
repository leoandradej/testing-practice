const capitalize = require('./capitalize');

test('it returns the first character of a string capitalized', () => {
    expect(capitalize('string')).toBe('String');
})