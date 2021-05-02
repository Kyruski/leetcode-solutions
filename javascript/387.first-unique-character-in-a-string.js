/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const dict = {}
  for (let item of s) {
    dict[item] = dict[item] ? dict[item] + 1 : 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]] === 1) return i;
  }
  return -1
};