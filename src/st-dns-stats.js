import {
  NotImplementedError
} from '../extensions/index.js';

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
export default function getDNSStats(domains) {
  let arrys = domains.map(el => el.split('.').reverse());
  let maxLength = Math.max.apply(null, arrys.map((el) => el.length));
  let stack = [];
  for (let i = 0; i < maxLength; i++) {
    stack[i] = arrys.reduce((acum, current) => {
      let check = `${stack[i - 1] ? Object.keys(stack[i - 1]).join() : ''}.${current[i]}`;
      if (!current[i]) return acum;
      return {
        ...acum,
        [check]: acum[check] ? acum[check] + 1 : 1
      }
    }, {});
  }
  var newObj = stack.reduce((a, b) => Object.assign(a, b), {})
  return newObj;
}