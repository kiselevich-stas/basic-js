const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  encrypt(message, key) {
    
    
    let arr = []
    let res = ''
    if(!message || !key){
      throw new Error("Incorrect arguments!");
    }
    message = message.toUpperCase()
    key = key.toUpperCase()
    
    
    for(let i = 0, j = 0; i < message.length; i++){
      if(j == key.length) j = 0
      if(this.alph.indexOf(message[i]) == -1){
        res += message[i]
      }
      else {
        let pos = (this.alph.indexOf(message[i]) + this.alph.indexOf(key[j])) % 26
        console.log(pos)
        res += this.alph[pos]
        j++
      }
      
    }
    
    return this.direct ? res : res.split("").reverse().join("");
  }
  decrypt(message, key) {
    let arr = []
    let res = ''
    if(!message || !key){
      throw new Error("Incorrect arguments!");
    }
    message = message.toUpperCase()
    key = key.toUpperCase()
    
    
    for(let i = 0, j = 0; i < message.length; i++){
      if(j == key.length) j = 0
      if(this.alph.indexOf(message[i]) == -1){
        res += message[i]
      }
      else {
        let pos = (this.alph.indexOf(message[i]) - this.alph.indexOf(key[j])) % 26
        if(pos < 0) pos += 26
        console.log(pos)
        res += this.alph[pos]
        j++
      }
      
    }
    
    return this.direct ? res : res.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
