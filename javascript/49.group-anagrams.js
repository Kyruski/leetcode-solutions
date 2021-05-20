/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let output = {};
  for (let i = 0; i < strs.length; i++) {
    let item = strs[i].split('').sort().join('')
    if (output[item] ) {
      output[item].push(strs[i])
    } else {
      output[item] = [strs[i]]
    }
  }
  return Object.values(output);
};