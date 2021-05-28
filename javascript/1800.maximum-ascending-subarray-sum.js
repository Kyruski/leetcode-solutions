/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[j - 1]) sum += nums[j];
      else break;
    }
    max = sum > max ? sum : max;
    sum = 0;
  }
  return max;
};