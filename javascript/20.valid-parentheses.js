/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const dict = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  const stack = [];
  for (let item of s) {
    if (dict[item]) {
      if (stack.pop() !== dict[item]) {
        return false;
      }
    } else {
      stack.push(item);
    }
  }
  return stack.length === 0;
};

