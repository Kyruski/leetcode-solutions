/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */


var spiralOrder = function(matrix) {
  const returnArr = [];
  let x = 0;
  let y = 0;
  let xStart = 0;
  let yStart = 0;
  let xEnd = matrix[0].length - 1;
  let yEnd = matrix.length - 1;
  while (xStart < xEnd && yStart < yEnd) {
    for (x; x < xEnd; x++) {
      returnArr.push(matrix[y][x]);
    }
    xEnd--;
    for (y; y < yEnd; y++) {
      returnArr.push(matrix[y][x]);
    }
    yEnd--;
    for (x; x >= xStart; x--) {
      returnArr.push(matrix[y][x]);
      console.log('x', x, y)
    }
    xStart++;
    console.log(x, y);
    for (y; y >= yStart; y--) {
      returnArr.push(matrix[y][x]);
    }
    yStart++;
  }
  return returnArr;
};

