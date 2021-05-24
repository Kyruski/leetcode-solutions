/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
  let total = 0;
  let currArr = [];
  for (let i = 0; i < arr.length; i++) {
    currArr = [arr[i]];
    let j = i + 1;
    total += currArr.reduce((total, curr) => total += curr);
    while(j < arr.length) {
      currArr.push(arr[j])
      if (currArr.length % 2 === 1) total += currArr.reduce((total, curr) => total += curr);
      j++
    }
  }
  return total;
};