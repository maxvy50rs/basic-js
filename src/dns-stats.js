const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let splittedReversed = domains.map(domain => {
    let temp = domain.split('.').reverse();
    temp.unshift('');
    return temp;
  });
  let joined = splittedReversed.map(domain => {
    return domain.slice(0, -1).map((_, idx) => domain.slice(0, idx + 2).join('.'));
  });
  let flat = joined.flat();
  let unique = new Set(joined.flat());
  let res = {};
  for (domain of unique) {
    res[domain] = flat.filter(dom => dom === domain).length;
  }
  return res;
}

module.exports = {
  getDNSStats
};
