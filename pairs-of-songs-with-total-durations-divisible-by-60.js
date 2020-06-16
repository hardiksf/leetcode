/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
    let count = 0;
    const length = time.length;
    for (i = 0; i < length; i++) {
        for (j = i + 1; j < length; j++) {
            if ((time[i] + time[j]) % 60 === 0) {
                count++;
            }
        }
    }
    return count;
};

const input = [30, 20, 150, 100, 40];
console.log(numPairsDivisibleBy60(input));
