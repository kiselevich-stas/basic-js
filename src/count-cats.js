const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  let count = 0
  for(let item of arr){
    count += item.filter(word => word == '^^').length
  }
  return count
  throw new NotImplementedError('Not implemented');
  
}

module.exports = {
  countCats
};
