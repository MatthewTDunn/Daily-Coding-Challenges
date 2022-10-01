// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(high('man i need a taxi up to ubud'), 'taxi');
    assert.strictEqual(high('what time are we climbing up the volcano'), 'volcano'); 
    assert.strictEqual(high('take me to semynak'), 'semynak');   
    assert.strictEqual(high('aa b'), 'aa');
    assert.strictEqual(high('b aa'), 'b');
    assert.strictEqual(high('bb d'), 'bb');
    assert.strictEqual(high('d bb'), 'd');
    assert.strictEqual(high('aaa b'), 'aaa');
  })
});

// my code

function high(x){
    const alphaConversion = {
      'a' : 1,
      'b' : 2,
      'c' : 3,
      'd' : 4,
      'e' : 5,
      'f' : 6,
      'g' : 7,
      'h' : 8,
      'i' : 9,
      'j' : 10,
      'k' : 11,
      'l' : 12,
      'm' : 13,
      'n' : 14,
      'o' : 15,
      'p' : 16,
      'q' : 17,
      'r' : 18,
      's' : 19,
      't' : 20,
      'u' : 21,
      'v' : 22,
      'w' : 23,
      'x' : 24,
      'y' : 25,
      'z' : 26
    }
    const splitString = x.split(' ')
    let sumCount = 0;
    let returnString = '';
    for (let i=0;i<splitString.length;i++){
      let count = 0; 
      let splitSplitString = splitString[i].split('')
      for (let j=0;j<splitString[i].split('').length;j++){
        count = count + alphaConversion[splitSplitString[j]]
        console.log(count)
      }
      if (count > sumCount) {
        returnString = splitString[i]
        sumCount = count
      }
    }
    return returnString;
    
  }