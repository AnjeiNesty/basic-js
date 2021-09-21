import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  const checkAddSep = options.additionSeparator ? options.additionSeparator : '|';
  const checkSep = options.separator ? options.separator : '+';
  const checkAddRepTim = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  const checkRepTim = options.repeatTimes ? options.repeatTimes : 1;
  const checkAddition = options.addition !== undefined ? String(options.addition) : '';
  let firstLevel = (checkAddition + checkAddSep).repeat(checkAddRepTim);
  firstLevel = firstLevel.substring(0, firstLevel.length - checkAddSep.length);
  let secondLevel = (String(str) + firstLevel + checkSep).repeat(checkRepTim);
  secondLevel = secondLevel.substring(0, secondLevel.length - checkSep.length);
  return secondLevel;
}
