/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let first;
  let second;
  let third;
  for (let num of nums) {
    if (first && second && third) {
      if (num > third) {
        if (num > second) {
          if (num > first) {
            [first, second, third] = [num, first, second];
          } else if (num === first) {
            continue;
          } else {
            [second, third] = [num, second];
          }
        } else if (num === second) {
          continue;
        } else {
          third = num;
        }
      }
    } else if (first && second) { 
      if (num > second) {
        if (num > first) {
          [first, second, third] = [num, first, second];
        } else if (num === first) {
          continue;
        } else {
          [second, third] = [num, second];
        }
      } else if (num === second) {
        continue;
      } else {
        third = num;
      }
    } else if (first) {
      if (num > first) {
        [first, second] = [num, first];
      } else if (num === first) {
        continue;
      } else {
        second = num;
      }
    } else first = num;
  }
  return third || third === 0 ? third : first;
};

var thirdMax = function(nums) {
  let sortedSet = Array.from(new Set(nums)).sort((a, b) => b - a);
  return sortedSet[2] || sortedSet[2] === 0 ? sortedSet[2] : sortedSet[0];
};