const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1,s2) {
  let obj = {}
  let count = 0;
  obj = s1.split('').reduce((acc,curr) => {
    
    if(acc[curr]){
      acc[curr] += 1
    }else {
      acc[curr] = 1
    }
    return acc
  },{})
  
  let arrString2 = s2.split('')

  for(let i = 0; i < arrString2.length; i++){
    if(obj[arrString2[i]] > 0){
      count++;
      obj[arrString2[i]] -= 1
    }
    
  }
  return count
}

module.exports = {
  getCommonCharacterCount
};
