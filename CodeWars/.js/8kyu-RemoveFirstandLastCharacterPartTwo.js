// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

const chai = require("chai");
const assert = chai.assert;

describe("Tests", () => {
  it("Should remove the first and last character", () => {
    assert.strictEqual(array('1,2,3'), '2');
    assert.strictEqual(array('1,2,3,4'), '2 3');
    assert.strictEqual(array('1,2,3,4,5'), '2 3 4');
  })
  it("Should return null if the final result is an empty string", () => {
    assert.strictEqual(array(''), null);
    assert.strictEqual(array('1'), null);
    assert.strictEqual(array('1,2'), null);
  })
});

// my code

const array = (arr) => (arr.split(',').length > 2) ? arr.split(',').slice(1,arr.split(',').length-1).join(' ') : null;
