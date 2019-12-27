/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    return nums
        .map(number => number.toString())
        .filter(string => string.length % 2 === 0)
        .length;

};

var findNumbers2 = function (nums) {
    return nums
        .map(number => number + '')
        .filter(string => string.length % 2 === 0)
        .length;

};

/**
 * 
 * Runtime: 52 ms, faster than 93.78% of JavaScript online submissions for Find Numbers with Even Number of Digits.
 * Memory Usage: 35.6 MB, less than 100.00% of JavaScript online submissions for Find Numbers with Even Number of Digits.
 */
console.log(findNumbers([12, 345, 2, 6, 7896]));

/**
 * Runtime: 60 ms, faster than 54.66% of JavaScript online submissions for Find Numbers with Even Number of Digits.
 * Memory Usage: 34.8 MB, less than 100.00% of JavaScript online submissions for Find Numbers with Even Number of Digits.
 */
console.log(findNumbers2([12, 345, 2, 6, 7896]));
