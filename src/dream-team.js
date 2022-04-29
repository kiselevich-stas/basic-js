const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(inp) {
  if (Array.isArray(inp) === false) return false
  inp = inp.filter(word => typeof(word) == 'string')
  inp = inp.map(el => el.trim())
  let a = inp.reduce((acc,cur) => {
    
    cur = cur.slice(0,1);
    
    acc.push(cur.toUpperCase())
    
    return acc

  },[])
  return a.sort().join('')
}

module.exports = {
  createDreamTeam
};
