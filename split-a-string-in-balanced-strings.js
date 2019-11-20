/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let numberOfLs = 0;
    let numberOfRs = 0;
    let count = 0;
    for (const character of s) {
        character === "L" ? numberOfLs++ : numberOfRs++;
        if (numberOfLs > 0) {
            if (numberOfLs === numberOfRs) {
                count++;
                numberOfLs = 0;
                numberOfRs = 0;
            }
        }
    }
    return count;
};

console.log(balancedStringSplit("RLLLLRRRLR"));