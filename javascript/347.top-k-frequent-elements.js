/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const dict = {};
  for (let item of nums) {
    dict[item] = dict[item] ? dict[item] + 1 : 1;
  }
  const array = [];
  for (let key in dict) {
    array.push([key, dict[key]]);
  }
  return array.sort((a, b) => b[1] - a[1]).slice(0, k).map(item => item[0]);
};