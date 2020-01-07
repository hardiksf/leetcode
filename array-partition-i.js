/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    nums.sort((a, b) => a - b);
    console.log(nums);
    let result = 0;
    for (let i = 0, length = nums.length; i < length; i = i + 2) {
        result += nums[i];
    }
    return result;

};

console.log(arrayPairSum([1, 4, 3, 2])); // 4
console.log(arrayPairSum([-470, 66, -4835, -5623])); // -6093
