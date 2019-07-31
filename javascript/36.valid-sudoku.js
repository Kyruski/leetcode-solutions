/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let obj;
  for (let i = 0; i < 9; i++) {
    obj = {};
    for (let k = 0; k < 9; k++) {
      if (board[i][k] === '.') continue;
      if (obj[board[i][k]]) return false;
      obj[board[i][k]] = true;
    }
  }
  for (let i = 0; i < 9; i++) {
    obj = {};
    for (let k = 0; k < 9; k++) {
      if (board[k][i] === '.') continue;
      if (obj[board[k][i]]) return false;
      obj[board[k][i]] = true;
    }
  }
  for (let i = 0; i < 9; i++) {
    obj = {};
    let colStart = (i % 3) * 3;
    let rowStart = Math.floor(i / 3) * 3;
    for (let k = 0; k < 9; k++) {
      let column = colStart + (k % 3);
      let row = rowStart + Math.floor(k / 3);
      if (board[row][column] === '.') continue;
      if (obj[board[row][column]]) return false;
      obj[board[row][column]] = true;
    }
  }
  return true;
};

