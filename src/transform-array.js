import { NotImplementedError } from '../extensions/index.js';

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

export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  const resultArray = [];
  let arrayLength = arr.length;
  for (let i = 0; i < arrayLength; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if (i < arrayLength - 3) {
          if (arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev')
            i = i + 1;
        }
        i++;
        break;
      case '--discard-prev':
        if (resultArray.length) resultArray.pop();
        break;
      case '--double-next':
        if (i != arrayLength - 1) resultArray.push(arr[i + 1]);
        break;
      case '--double-prev':
        if (i != 0) resultArray.push(arr[i - 1]);
        break;
      default:
        resultArray.push(arr[i]);
    }
  }
  return resultArray;
};
