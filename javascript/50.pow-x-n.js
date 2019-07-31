/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

const pow = (x, n) => {
  let total = 0;
  if (n === 0) return 1;
  if (n === 1) return x;
  if (n % 2 === 0) {
    total = pow(x, n / 2);
    return total * total;
  } else {
    total = pow(x, (n - 1) / 2);
    return total * total * x;
  }
}
var myPow = function(x, n) {
  return n > 0 ? pow(x, n) : 1/pow(x, -n);
};

