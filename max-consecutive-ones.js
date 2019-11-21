/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    const length = nums.length;
    let counter = 0;
    let result = 0;
    for (let i = 0; i < length; i++) {
        if (nums[i] === 1 && counter === 0) {
            counter = 1;
        }
        if (nums[i] === 0) {
            counter = 0;
        }
        if (nums[i] === 1 && counter >= 1) {
            counter++;
        }
        if (counter > result) {
            result = counter;
        }
    } return Math.max(0, result - 1);
};

console.log(findMaxConsecutiveOnes([0, 1, 0, 0, 1, 1]));