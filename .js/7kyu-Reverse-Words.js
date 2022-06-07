// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
    assert.strictEqual(reverseWords('apple'), 'elppa');
    assert.strictEqual(reverseWords('a b c d'), 'a b c d');
    assert.strictEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
  });
});


// my code

function reverseWords(str) {
    let splitWord = str.split(" ")
    let reversedStr = ""
    for (let i=0;i<splitWord.length;i++){
      (i < splitWord.length-1) ? reversedStr = reversedStr + splitWord[i].split('').reverse().join('') + ' ' : reversedStr = reversedStr + splitWord[i].split('').reverse().join('')
    }
    return reversedStr
  }
