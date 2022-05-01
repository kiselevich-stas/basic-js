const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = []
  
  for(let i = 0; i < domains.length; i++){
    let flag = true
    let end = domains[i].length
    arr.push('.' + domains[i].split('.').reverse().join('.'))
    

    while(flag){
      let pos = domains[i].indexOf('.')
      if(pos == -1){
        flag = false
        break;
      }
      domains[i] = domains[i].substring(pos+1)
      arr.push('.' + domains[i].split('.').reverse().join('.'))
    }
    
    
  }
  return arr.reduce((acc,curr)=>{
    acc[curr] ? acc[curr] += 1 : acc[curr] = 1 
    return acc
  },{})
}

module.exports = {
  getDNSStats
};
