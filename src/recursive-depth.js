const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let max = 1
    let count = 1;
    arr.map((curr,index) => {
      if(Array.isArray(curr)){
        count += this.calculateDepth(curr)
      }
      if(count > max) max = count
      count = 1
    })
    
    
    return max
  }
}

module.exports = {
  DepthCalculator
};
