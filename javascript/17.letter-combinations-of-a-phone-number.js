/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const dict = {
    '2': ['a','b','c'],
    '3': ['d','e','f'],
    '4': ['g','h','i'],
    '5': ['j','k','l'],
    '6': ['m','n','o'],
    '7': ['p','q','r','s'],
    '8': ['t','u','v'],
    '9': ['w','x','y','z']
  };
  let outputArr = [];
  for (let i = 0; i < digits.length; i++) {
    const num = digits[i];
    const numsLength = dict[num].length;
    if (i === 0) {
      outputArr = dict[num];
    } else {
      outputArr = (numsLength === 4) 
        ? [...outputArr, ...outputArr, ...outputArr, ...outputArr]
        : [...outputArr, ...outputArr, ...outputArr];
        for (let k = 0; k < outputArr.length; k++) {
          let split = outputArr.length / numsLength;
          const letter = Math.floor(k / split);
          outputArr[k] += dict[num][letter];
        }
    }
  }
  return outputArr.sort();
};

