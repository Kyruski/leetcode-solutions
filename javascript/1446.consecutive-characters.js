/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  let max = 0;
  let currCount = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      currCount++
    } else {
      if (currCount > max) max = currCount;
      currCount = 1;
    }
  }
  if (currCount > max) max = currCount;
  return max;
};