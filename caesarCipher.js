function caesarCipher(str) {
    const lowerCase = str.toLowerCase();
    let solved = '';
    for (let i = 0; i < lowerCase.length; i++) {
        let characterCode = lowerCase[i].charCodeAt();
        if (characterCode >= 97 && characterCode <= 109) {
            solved += String.fromCharCode(characterCode + 13);
        } else if (characterCode >= 110 && characterCode <=122) {
            solved += String.fromCharCode(characterCode - 13);
        } else {
            solved += lowerCase[i];
        }
    }
    return solved;
}

module.exports = caesarCipher;