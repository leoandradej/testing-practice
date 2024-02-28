const caesarCipher = require('./caesarCipher');

test('it returns a ciphered message', () => {
    expect(caesarCipher('secret message')).toBe('frperg zrffntr');
})

test('it solves a ciphered message', () => {
    expect(caesarCipher('frperg zrffntr')).toBe('secret message');
})

test('case sensitivity', () => {
    expect(caesarCipher('SECRET MESSAGE')).toBe('frperg zrffntr');
    expect(caesarCipher('SECRET message')).toBe('frperg zrffntr');
    expect(caesarCipher('Secret Message')).toBe('frperg zrffntr');
})