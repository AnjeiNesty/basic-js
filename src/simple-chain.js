import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(arguments.length !== 0 ? `( ${value} )` : '( )');
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.chain.length - 1 || typeof position !== 'number') {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    let newArray = this.chain.filter((el, idx) => idx + 1 !== position);
    this.chain = newArray;
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};
