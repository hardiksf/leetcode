/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    const result = [];
    let sum = 0;
    for (let i = 0, length = nums.length; i < length; i++) {
        sum = sum + nums[i];
        result.push(sum);
    }
    return result;
};