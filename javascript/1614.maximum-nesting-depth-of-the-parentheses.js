/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
  let max = 0;
  let stackSize = 0;;

  for (let item of s) {
    if (item === '(') {
      stackSize++;
      if (stackSize > max) max = stackSize;
    } else if (item === ')') stackSize--;
  }

  return max;
};