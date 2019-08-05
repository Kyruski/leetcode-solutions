/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

const rotateMatrix = (matrix) => {
  const newMatrix = [];
  for (let i = matrix[0].length - 1; i >= 0; i--) {
    let arr = [];
    for (let k = 1; k < matrix.length; k++) {
      arr.push(matrix[k][i]);
    }
    newMatrix.push(arr);
  }
  return newMatrix;
}

var spiralOrder = function(matrix) {
  let currentMatrix = matrix;
  const returnArr = [];
  while (currentMatrix.length) {
    for (let item of currentMatrix[0]) {
      returnArr.push(item);
    }
    currentMatrix = rotateMatrix(currentMatrix);
  }
  return returnArr;
};

