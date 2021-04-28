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

var isHappy = function(n) {
  const prev = {}
  while (!prev[n] && n !== 1) {
    prev[n] = true;
    let curr = 0;
    while (n > 0) {
      curr += (n % 10)**2
      n = Math.floor(n / 10)
    }
    n = curr;
  }

  return n === 1;
};