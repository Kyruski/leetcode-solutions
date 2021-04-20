/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isSubsequence = function(s, t) {
    s = s.split('').join('+.*');
    return new RegExp(s).test(t)
};

var isSubsequence = function(s, t) {
  let currIndexS = 0;
  for (let letter of t) {
      if (currIndexS === s.length) return true;
      if (s[currIndexS] === letter) currIndexS++;
  }
  return (currIndexS === s.length);
}