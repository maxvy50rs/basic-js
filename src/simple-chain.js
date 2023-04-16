const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  nodes: [],

  getLength() {
    return this.nodes.length;
  },
  addLink(value) {
    this.nodes.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    try {
      if (typeof position !== 'number' || position < 1 || position > this.nodes.length) {
        console.log('throws');
        throw 'invalid link';
      }
      this.nodes.splice(position - 1, 1);  
      return this;
    } catch (e) {
      console.log('catch');
      this.nodes = [];
      throw new Error('You can\'t remove incorrect link!');
    }
  },
  reverseChain() {
    this.nodes.reverse()
    return this;
  },
  finishChain() {
    let res = this.nodes.join('~~');
    this.nodes = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
