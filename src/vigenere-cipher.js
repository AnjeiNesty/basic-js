import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(props = true) {
    this.isInverted = props;
  }
  formulaVigenere(a, b, action) {
    let char = '';
    if (action === 'encrypt') {
      char = (a.charCodeAt(0) + b.toUpperCase().charCodeAt(0)) % 26 + 65;
    } else {
      char = 65 + ((a.charCodeAt(0) - 65) - (b.toUpperCase().charCodeAt(0) - 65) + 26) % 26;
    }
    return String.fromCharCode(char);
  }
  generator(text, key, action) {
    let result = '';
    if (!text || !key) throw new Error('Incorrect arguments!');
    let arrayMessage = text.toUpperCase().split('');
    let idxForKey = 0;
    for (let i = 0; i < arrayMessage.length; i++) {
      if (arrayMessage[i].charCodeAt(0) < 65 || arrayMessage[i].charCodeAt(0) > 90) {
        result += arrayMessage[i];
        continue;
      }
      if (idxForKey === key.length) {
        idxForKey = 0;
      }
      let encryptedChar = this.formulaVigenere(arrayMessage[i], key[idxForKey], action);
      result += encryptedChar;
      idxForKey++;
    }
    return result;
  }
  encrypt(message, key) {
    return !this.isInverted ? this.generator(message, key, 'encrypt').split('').reverse().join('') : this.generator(message, key, 'encrypt');
  }
  decrypt(encryptedMessage, key) {
    return !this.isInverted ? this.generator(encryptedMessage, key, 'decrypt').split('').reverse().join('') : this.generator(encryptedMessage, key, 'decrypt');
  }
}
