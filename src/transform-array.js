const { NotImplementedError } = require('../extensions/index.js');

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
function transform(arr) {
  if (Array.isArray(arr) === false) throw new Error(`'arr' parameter must be an instance of the Array!`);
  let res = []
  for(let i = 0; i <arr.length; i++){
    if(arr[i] == '--discard-next') {
      i += 2
      continue;
    }
    else if (arr[i] == '--discard-prev') res.pop()
    else if (arr[i] == '--double-next') {
      if(i + 1 != arr.length){
        res.push(arr[i+1])
      }
    }
    else if (arr[i] == '--double-prev'){
      if(i - 1 > 0){
        res.push(arr[i-1])
      }
    } 
    else {
      res.push(arr[i])
    }
    console.log(i)
    console.log(res)
  }
  return res
}

module.exports = {
  transform
};
