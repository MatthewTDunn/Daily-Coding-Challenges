// Write function which takes a string and make an acronym of it.

// Rule of making acronym in this kata:

// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether
// Eg:

// Code wars -> C, w -> C W -> CW
// Note: There will be at least two words in the given string!

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Make acronym", () => {
  it("Sample Tests", () => {

    let tests = [
      ["Code Wars", "CW"],
      ["Water Closet", "WC"],
      ["Portable Network Graphics", "PNG"],
      ["PHP: Hypertext Preprocessor", "PHP"],
      ["hyper text markup language", "HTML"]
    ];
    tests.forEach( ([inp,exp]) => assert.strictEqual( toAcronym(inp), exp ) );
  });
});

// my code

function toAcronym(inp){
    const splitString = inp.split(' ');
    let returnString = [];
    for (let i=0;i<splitString.length;i++) {
      returnString.push(splitString[i][0]);
    }
    return returnString.join('').toUpperCase();
  }