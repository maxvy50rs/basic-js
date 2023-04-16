const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  let temp = [...arr];
  temp.forEach((elem, idx) => {
    if (elem == '--discard-next') {
      temp.splice(idx, 2, undefined, 'deleted')
    }
    if (elem == '--discard-prev') {
      if (temp[idx - 1]) {
        temp.splice(idx - 1, 2, 'deleted', undefined)
      } else {
        temp.splice(idx, 1, undefined)
      }
    }
    if (elem == '--double-next') {
      temp.splice(idx, 1, temp[idx + 1] !== 'deleted' ? temp[idx + 1] : undefined);
    }
    if (elem == '--double-prev') {
      temp.splice(idx, 1, temp[idx - 1] !== 'deleted' ? temp[idx - 1] : undefined);
    }
  })
  return temp.filter(elem => elem && elem !== 'deleted');
}

module.exports = {
  transform
};
