const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  for (let i = 0; i < str.length;) {
    let n = 0;
    while (str.charAt(i) === str.charAt(i + n)) {
      n++;
    }
    result += `${n > 1? n : ''}${str.charAt(i)}`;
    i += n;
  }
  
  return result;
}

module.exports = {
  encodeLine
};
