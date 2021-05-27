/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
  num = '' + num;
  for (let i = 0; i < num.length; i++) {
    if (num[i] === '6') {
      num = num.slice(0, i) + '9' + num.slice(i + 1); 
      break;
    }
  }
  return parseInt(num);
};