const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit(n) {
  let arr = n.toString().split('')
  let res = 0;
  for(let i =0; i < arr.length; i++){
    let newArr = [...arr]
    let sum
    newArr.splice(i, 1)
    sum = newArr.join('')
    
    if(sum > res) res = sum

  }
  return +res
}

module.exports = {
  deleteDigit
};
