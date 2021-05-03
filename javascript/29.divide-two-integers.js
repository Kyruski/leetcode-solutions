/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let answer = 0;
  let workingDivisor = divisor;
  let workingDividend = dividend;
  let isNegative;
  if (workingDividend >= 0 && workingDivisor >= 0) {
    isNegative = false;
  } else if (workingDividend < 0 && workingDivisor < 0) {
    [workingDivisor, workingDividend, isNegative] = [0 - workingDivisor, 0 - workingDividend, false];
  } else if (workingDividend < 0) {
    [workingDividend, isNegative] = [0 - workingDividend, true];
  } else {
    [workingDivisor, isNegative] = [0 - workingDivisor, true];
  }

  let logArray = [[workingDivisor, 1]];
  while (logArray[logArray.length - 1][0] < workingDividend) {
    let nextDivisor = ((logArray[logArray.length - 1][0]) + (logArray[logArray.length - 1][0]));
    let nextDivisorAdditional = ((logArray[logArray.length - 1][1]) + (logArray[logArray.length - 1][1]));
    logArray.push([nextDivisor, nextDivisorAdditional]);
  }
  for (let i = logArray.length - 1; i >= 0; i--) {
    while (workingDividend >= logArray[i][0] ) {
      workingDividend -= logArray[i][0];
      answer += logArray[i][1];
    }
  }
  
  if (isNegative) answer = answer > 2147483648 ? 2147483648 : 0 - answer;
  else {
    if (answer > 2147483647) {
      answer = 2147483647;
    }
  }
  return answer;
};