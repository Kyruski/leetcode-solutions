/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const dict = {}

  for (let item of nums) {
    dict[item] = dict[item] ? dict[item] + 1 : 1;
  }
  let max = -Infinity;
  let num = -Infinity;
  for (let key in dict) {
    if (dict[key] > max) {
      max = dict[key];
      num = key;
    }
  }
  return num;
};