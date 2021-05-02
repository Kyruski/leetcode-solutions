/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
  let count = 0;
  const pos = [0, 0];
  const move = () => {
    if (pos[0] == m - 1 && pos[1] == n - 1) return count++;
    if (pos[0] < m - 1) {
      pos[0]++;
      move();
      pos[0]--;
    }
    if (pos[1] < n - 1) {
      pos[1]++;
      move();
      pos[1]--;
    }
    return;
  }
  move();
  return count;
};

var uniquePaths = function(m, n) {
  const output = [];
  for (let i = 0; i < n; i++) output.push([...new Array(m).fill(1)]);
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      output[i][j] = output[i - 1][j] + output[i][j - 1];
    }
  }
  return output[n - 1][m - 1];
};