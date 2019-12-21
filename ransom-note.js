/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    for (const character of ransomNote) {
        if (magazine.includes(character)) {
            magazine = magazine.replace(character, '');
        } else {
            return false;
        }
    }
    return true;
};

console.log(canConstruct('aa', 'aab'));