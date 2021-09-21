import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  const global = n.toString().split('');
  let local = n.toString().split('');
  let result = [];
  for (let i = 0; i < global.length; i++) {
    local.splice(i, 1)
    result.push(local);
    local = JSON.parse(JSON.stringify(global));
  }
  return Math.max.apply(null, result.map(el => +el.join('')));
}
