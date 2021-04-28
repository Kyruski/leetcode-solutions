/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  return nums.reduce((t, c, i) => t += (i + 1) - c, 0)
};