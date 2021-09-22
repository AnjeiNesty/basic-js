import { NotImplementedError } from '../extensions/index.js';

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
export default function sortByHeight(arr) {
  let sortArray = JSON.parse(JSON.stringify(arr));
  sortArray = sortArray.sort((a, b) => a - b).filter((el) => el !== -1);
  let idxArray = [];
  arr.forEach((el, idx) => {
    if (el !== -1) {
      idxArray.push(idx)
    }
  });
  for(let i = 0; i < sortArray.length; i ++) {
    arr[idxArray[i]] = sortArray[i];
  }
  return arr;
}
