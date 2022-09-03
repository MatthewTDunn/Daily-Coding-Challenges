// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.


// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(capitals('CodEWaRs'), [0,3,4,6] );
  });
});

// my code

var capitals = function (word) {
	let returnArr = [];
  const splitWord = word.split('')
  for (let i=0;i<splitWord.length;i++){
    if (splitWord[i] === splitWord[i].toUpperCase()) {
      returnArr.push(i)
    }
  }
  return returnArr
};
