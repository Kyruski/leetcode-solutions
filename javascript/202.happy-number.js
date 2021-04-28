/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const prev = {}
  while (!prev[n] && n !== 1) {
    prev[n] = true;
    let numArray = String(n).split('');
    let curr = 0;
    for (let item of numArray) {
      curr += Number(item)**2
    }
    n = curr;
  }

  return n === 1;
};