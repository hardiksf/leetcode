/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    let count = 0;
    S.split('').forEach(chara => {
        if (J.indexOf(chara) > -1) {
            count = count + 1;
        }
    });
    return count;
};