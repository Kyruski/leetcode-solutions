/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  const dict = {}
  let output = 0;
  for (let num of nums) {
    if (dict[num] === undefined) {
      dict[num] = true;
      output += parseInt(num);
    } else if (dict[num]) {
      dict[num] = false;
      output -= parseInt(num);
    }
  }
  return output;
};