// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(digitize(35231),[1,3,2,5,3]);
    assert.deepEqual(digitize(0),[0]);
  });
});

// my code


function digitize(n) {
    const returnArr = n.toString().split('').reverse()
    let finalArr = []
    console.log(Number(returnArr[0]))
    
    for (let i=0;i<returnArr.length;i++){
      finalArr.push(Number(returnArr[i]))
    }
    return finalArr
    
  }