/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const morseList = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  const output = [];
  for (let word of words) {
    let str = '';
    for (let i = 0; i < word.length; i++) {
      str += morseList[word.charCodeAt(i) - 97];
    }
    output.push(str);
  }

  return new Set(output).length;
};