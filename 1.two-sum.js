/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const dict = {};
  for (let i = 0; i < nums.length; i++) {
    const remainder = target - nums[i];
    if (dict[remainder] !== undefined && dict[remainder] !== i) {
      return [dict[remainder], i];
    }
    dict[nums[i]] = i;
  }
  return [0, 0];
};

