const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(inputMatrix) {
  let matrix = inputMatrix[0].map((_, jdx) => inputMatrix.map(row => row[jdx]));
  return matrix.reduce((sum, row) => {
    let zeroIdx = row.findIndex(elem => elem === 0);
    return sum +
      row.slice(0, zeroIdx !== -1 ? zeroIdx : undefined)
      .reduce((rowSum, elem) => rowSum + Math.max(0, elem), 0)
  }, 0);
}

module.exports = {
  getMatrixElementsSum
};
