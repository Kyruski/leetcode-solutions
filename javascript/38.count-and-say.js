/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let output;
  let currStr = '1';
  for (let i = 0; i < n; i++) {
    if (i !== 0) {
      let newStr = '';
      let count = 0;
      let currNum;
      for (let item of currStr) {
        if (currNum) {
          if (item === currNum) {
            count++
          } else {
            newStr += count + currNum;
            count = 1;
            currNum = item;
          }
        } else {
          currNum = item;
          count++;
        }
      }
      newStr += count + currNum;
      currStr = newStr;
    }
    output = currStr;
  }
  return output;
};