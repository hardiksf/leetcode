// patternArray return [ 0, 1, 0, 1 ] for "baba"
const getPatternArray = pattern => {
    const patternArray = [];
    for (let i = 0, length = pattern.length; i < length; i++) {
        const currentCharacter = pattern[i];
        if (pattern.indexOf(currentCharacter) === -1) {
            patternArray.push(i);
        } else {
            patternArray.push(pattern.indexOf(currentCharacter));
        }

    }
    return patternArray;
};

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
    debugger;
    const patternArray = getPatternArray(pattern);
    const result = [];
    for (let i = 0, length = words.length; i < length; i++) {
        const wordPatternArray = getPatternArray(words[i]);
        if (patternArray == '' + wordPatternArray) {
            result.push(words[i]);
        }
    }
    return result;
};

console.log(findAndReplacePattern(['badc', 'abab', 'dddd', 'dede', 'yyxx'], 'baba'));

