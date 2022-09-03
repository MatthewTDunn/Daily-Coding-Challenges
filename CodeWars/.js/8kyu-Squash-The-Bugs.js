// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

// There will only be one 'longest' word.

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(findLongest("The quick white fox jumped around the massive dog"), 7);
    assert.strictEqual(findLongest("Take me to tinseltown with you"), 10); 
    assert.strictEqual(findLongest("Sausage chops"), 7); 
    assert.strictEqual(findLongest("Wind your body and wiggle your belly"), 6); 
    assert.strictEqual(findLongest("Lets all go on holiday"), 7); 
  })
});

// my code

function findLongest(str) {
  
    var spl = str.split(" ");
    var longest = 0
    
    for (var i = 0; i < spl.length; i++) {
      if (spl[i].length > longest) {
        longest = spl[i].length
      }
    }
      return longest
  }
