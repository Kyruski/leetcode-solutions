/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  const sorted = [...heights].sort((a, b) => a - b);
  return heights.reduce((t, c, i) =>  t += (c === sorted[i]) ? 0 : 1, 0)
};