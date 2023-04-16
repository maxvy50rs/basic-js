const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  calculateDepth(arr) {
    /* function flatlyEqual(a, b) {
      return a.length == b.length && a.every((elem, idx) => elem === b[idx]);
    }
    let counter = 1;
    let atCurrentDepth = [...arr];
    while (!flatlyEqual(atCurrentDepth, atCurrentDepth.flat())) {
      counter++;
      atCurrentDepth = atCurrentDepth.flat();
    };
    return counter; */
    function containsArray(arr) {
      return arr.some(elem => Array.isArray(elem));
    }
    if (!containsArray(arr)) return 1;
    return this.calculateDepth(arr.flat()) + 1;
  }
}

const depthCalc = new DepthCalculator();
console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]]));

module.exports = {
  DepthCalculator
};
