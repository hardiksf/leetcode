/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const length = nums.length;

    // if k > length, we don't need to rotate more than length times
    if (length < k) {
        k = k % length;
    }

    if (length === k || k === 0) { // is length is the same as k OR if k is 0, we don't need to rotate
        return nums;
    }

    const result = [];
    for (let i = 0; i < length; i++) {
        result[(i + k) % length] = nums[i];
    }

    for (let i = 0; i < length; i++) {
        nums[i] = result[i];
    }
    return nums;

};

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log(rotate(nums, k));
