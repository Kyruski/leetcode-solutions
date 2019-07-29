/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const DIGIT_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  const num = s;
  const dig = DIGIT_VALUES;
  let sign = '+';
  let total = 0;
  for (let i = num.length - 1; i >= 0; i--) {
    if (!dig[num[i]]) return "null";
    sign = (dig[num[i]] < dig[num[i + 1]]) ? '-' : (dig[num[i]] > dig[num[i + 1]]) ? '+' : sign;
    total += +(sign + dig[num[i]]);
  }
  return total;
};

