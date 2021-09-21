import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== '[object Date]'
    || typeof date !== 'object' || Object.keys(date).length > 0
    || !(date instanceof Date)) {
    throw new Error('Invalid date!');
  }
  const month = date.getMonth();
  if (2 > month || month == 11) {
    return 'winter'
  } else if (5 > month && month > 1) {
    return 'spring'
  } else if (8 > month && month > 4) {
    return 'summer'
  } else {
    return 'autumn'
  }
}
