/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  return nums.sort((b, a) => b === 0 ? -1 : 0);
};