/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    const highestNumberOfCandies = Math.max(...candies);
    const result = [];
    for (let i = 0, length = candies.length; i < length; i++) {
        if (candies[i] + extraCandies >= highestNumberOfCandies) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result;
};
console.log(kidsWithCandies([5, 8], 0));