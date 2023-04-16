const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let pattern = arr.map(elem => elem === -1 ? elem : undefined);
  let temp = [...arr];
  temp.sort((a, b) => a - b);
  temp = temp.slice(pattern.filter(elem => elem === -1).length);
  return pattern.map(elem => elem === -1 ? elem : temp.shift());
}

module.exports = {
  sortByHeight
};
