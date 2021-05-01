/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  let length = columnTitle.length;
  let output = 0;
  for (let i = 0; i < length; i++) {
    output += (26 ** (length - (i + 1))) * (columnTitle.charCodeAt(i) - 64);
  }
  return output;
};