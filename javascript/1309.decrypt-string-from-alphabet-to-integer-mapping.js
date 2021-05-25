/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
  const start = 96;
  let output = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === '#') {
      output += String.fromCharCode(start + parseInt(s.slice(i, i + 2)))
      i += 2;
    } else {
      output += String.fromCharCode(start + parseInt(s[i]));
    }
  }
  return output;
};