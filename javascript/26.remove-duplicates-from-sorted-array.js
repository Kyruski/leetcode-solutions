/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0;
  while (i < nums.length) {
    for (let k = nums.length - 1; k > i; k--) {
      if (nums[k] === nums[i]) {
        nums.splice(k, 1);
      }
    }
    i++;
  }
  return nums.length;
};

