/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let first = -Infinity;
  let second = -Infinity;
  for (let num of nums) {
    if (num >= first) {
      second = first;
      first = num;
    } else if (num >= second) {
      second = num;
    }
  }
  return (first - 1) * (second - 1);
};