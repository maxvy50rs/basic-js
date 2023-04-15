const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numbers = n.toString()
    .split('')
    .map((_, idx, digits) => + digits.slice(0, idx).concat(digits.slice(idx + 1)).join(''));
  return Math.max(...numbers);
}

module.exports = {
  deleteDigit
};
