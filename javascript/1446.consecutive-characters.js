/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  let countingChar = null;
  let max = 0;
  let currCount = 1;
  for (let item of s) {
    if (item === countingChar) {
      currCount++
    } else {
      if (currCount > max) max = currCount;
      currCount = 1;
      countingChar = item;
    }
  }
  max = Math.max(max, currCount);
  return max;
};