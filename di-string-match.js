/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
    let minimumRemainingNumber = 0;
    let maxRemainingNumber = S.length;
    const result = [];
    for (const character of S) {
        if (character === 'I') {
            result.push(minimumRemainingNumber);
            minimumRemainingNumber++;
        } else {
            result.push(maxRemainingNumber);
            maxRemainingNumber--;
        }
    }
    result.push(maxRemainingNumber);
    return result;
};
console.log(diStringMatch('DDI'));
