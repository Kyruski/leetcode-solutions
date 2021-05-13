/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  const dict = {};
  let output = -1;
  for (let item of arr) {
    dict[item] = (dict[item]) ? dict[item] + 1 : 1;
  }
  for (let key in dict) {
    if (dict[key] === parseInt(key)) {
      output = (output < parseInt(key)) ? key : output;
    }
  }
  return output;
};