/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
  let largest = -Infinity;
  return rectangles.reduce((total, curr) => {
    let lower = curr[0] < curr[1] ? curr[0] : curr[1];
    if (lower > largest) {
      largest = lower;
      return 1;
    } else if (lower === largest) {
      return total + 1;
    } else return total;
  }, 0)
};