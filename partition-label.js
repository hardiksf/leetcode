/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
    let maxIndex = 0;
    const result = [];
    let start = 0;

    for (let i = 0, length = S.length; i < length; i++) {

        let currentPartition = '';
        const currentCharacter = S[i];

        const lastIndexOfCurrentCharacter = S.lastIndexOf(currentCharacter);
        if (lastIndexOfCurrentCharacter > maxIndex) {
            maxIndex = lastIndexOfCurrentCharacter;
        }
        currentPartition = S.substring(start, maxIndex + 1);
        if (lastIndexOfCurrentCharacter === maxIndex && maxIndex === i) {
            result.push(currentPartition.length);
            start = i + 1;
            maxIndex = 0;
            currentPartition = '';
        }

    }
    return result;

};

// console.log(partitionLabels('ababcbacadefegdehijhklij'));
console.log(partitionLabels('abab cc'));
