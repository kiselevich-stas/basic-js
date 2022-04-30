const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr : [],
  
  getLength(){
    return this.arr.length
  },
  
  addLink(value) {
    this.arr.push(value)
    return this
  },
  reverseChain(){
    this.arr.reverse()
    return this
  },
  removeLink(position){
    if(position <= 0 || position > this.arr.length  || typeof position !== 'number') {
      this.arr = []
      throw new Error('You can\'t remove incorrect link!');
    }
    else {
      this.arr.splice(position - 1, 1)
    }
    return this
  },
  finishChain(){
    let str = ''
    this.arr.map((currentValue,index,arr) => {
      if(index == arr.length-1) str += `( ${currentValue} )`
      else str += `( ${currentValue} )~~`
    })
    this.arr = []
    return str
  },
};

module.exports = {
  chainMaker
};
