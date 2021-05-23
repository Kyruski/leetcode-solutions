/**
 * @param {character[]} chars
 * @return {number}
 */
 var compress = function(chars) {
  let s = '';
  let count = 1;
  let curr;
  let currIndex = 0;
  let i;
  for (i = 0; i <= chars.length; i++) {
    if (!curr) {
      curr = chars[i];
    } else if (chars[i] === curr) {
      count++
    } else {
      s += (count === 1) ? curr : curr + count;
      s = s.split('');
      chars.splice(currIndex, i - currIndex, ...s);
      i = currIndex + s.length;
      currIndex += s.length;
      s = '';
      curr = chars[i];
      count = 1;
    }
  }
  return chars.length;
};