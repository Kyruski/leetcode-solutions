/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let count = 0;
  for (let stone of stones) {
    count += jewels.includes(stone) ? 1 : 0;
  }
  return count;
};