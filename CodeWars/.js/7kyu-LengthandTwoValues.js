// Given an integer n and two other values, build an array of size n filled with these two values alternating.

// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Test", () => {
  it('small arrays', () => {
    assert.deepEqual(alternate(5, true, false), [true, false, true, false, true])
  });
  
  it('larger arrays', () => {
    assert.deepEqual(alternate(20, 'blue', 'red'), ['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red'])
  });
  
  it('with 0', () => {
    assert.deepEqual(alternate(0, "lemons", "apples"), [])
  });
});

// my code

function alternate(n, firstValue, secondValue){
    let returnArr = [];
    for (let i=0; i<n; i++) {
      (i%2===0) ? returnArr.push(firstValue) : returnArr.push(secondValue);
    }
    return returnArr;
  }
