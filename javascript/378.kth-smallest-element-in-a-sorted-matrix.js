/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  const output = []
  for (let item of matrix) {
    for (let item2 of item) {
      output.push(item2);
    } 
  }
  return output.sort((a, b) => a - b)[k - 1];
};