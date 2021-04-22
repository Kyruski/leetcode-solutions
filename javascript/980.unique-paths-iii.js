/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
  const rowLength = grid.length;
  const colLength = grid[0].length;
  let count = 0;
  const findStart = () => {
    for (let row = 0; row < rowLength; row++) {
      for (let col = 0; col < colLength; col++) {
        if (grid[row][col] === 1) return [row, col];
      }
    }
  };
  const [startRow, startCol] = findStart();

  const checkComplete = () => { //check if the grid is complete
    for (let row = 0; row < rowLength; row++) {
      for (let col = 0; col < colLength; col++) {
        if (grid[row][col] === 0) return false;
      }
    }
    return true;
  };

  const traverseGrid = (currRow, currCol, newStart = 1) => { //moving through grid
    if (currRow < rowLength && currRow >= 0 && currCol < colLength && currCol >= 0) {
      if (grid[currRow][currCol] === 2) {
        count += checkComplete() ? 1 : 0;
        return;
      } else if ((grid[currRow][currCol] === 1 && newStart === 0) || grid[currRow][currCol] === -1) {
        return;
      } else {
        let temp = grid[currRow][currCol];
        if (newStart === 0){
          grid[currRow][currCol] = -1;
        }
        traverseGrid(currRow - 1, currCol, 0); //move up
        traverseGrid(currRow, currCol + 1, 0); //move right
        traverseGrid(currRow + 1, currCol, 0); //move down
        traverseGrid(currRow, currCol - 1, 0); //move left
        grid[currRow][currCol] = temp;
      }
      return;
    } else {
      return;
    }
  }

  traverseGrid(startRow, startCol);

  return count;
};