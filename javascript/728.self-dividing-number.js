/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  let output = [];
  for (let i = left; i <= right; i++) {
    let numString = i.toString();
    let isValid = true;
    for (let item of numString) {
      if (i % parseInt(item) !== 0) {
        isValid = false;
        break;
      }
    }
    if (isValid) output.push(i);
  }
  return output;
};