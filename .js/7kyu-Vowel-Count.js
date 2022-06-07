// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


const {assert} = require("chai");

describe("Vowels Count Tests",function(){
  it("should return 5 for 'abracadabra'",function(){
    assert.strictEqual(getCount("abracadabra"), 5) ;
  });
});


// my code

function getCount(str) {
    let regex = /[aeiou]/gi
    let count = str.match(regex);
    return (count == null) ? 0 : str.match(regex).length
  }
