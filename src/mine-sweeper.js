const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  function getNeighbors(i, j) {
    let temp = matrix.map(row => [...row]);
    temp[i][j] = null;
    let subMatrix = temp.slice(Math.max(i - 1, 0), i + 2).map(row => row.slice(Math.max(j - 1, 0), j + 2));
    return subMatrix;
  }
  function countMines(field) {
    return field.flat().filter(isMine => isMine === true).length;
  }
  return matrix.map((row, rowIdx) => 
    row.map((_, colIdx) => countMines(getNeighbors(rowIdx, colIdx)))
  )
}

module.exports = {
  minesweeper
};
