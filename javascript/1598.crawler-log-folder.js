/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
  return logs.reduce((t, c) => t += c === '../' ? (t === 0) ? 0 : -1 : (c === './') ? 0 : 1, 0)
};