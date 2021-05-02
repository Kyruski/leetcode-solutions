/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) return [];
  const output = [[1]];
  for (let i = 0; i < numRows - 1; i++) {
    const row = [];
    for (let j = 0; j <= output[i].length; j++) {
      row.push(output[i][j] + output[i][j - 1] || output[i][j] || output[i][j - 1]);
    }
    output.push(row);
  }
  return output;
};