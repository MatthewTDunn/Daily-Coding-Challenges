// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(find_average([1,1,1]), 1);
    assert.strictEqual(find_average([1,2,3]), 2);
    assert.strictEqual(find_average([1,2,3,4]), 2.5);
  });
});  



// my code


function find_average(array) {
    return (array.length>0) ? array.reduce((acc,cur) => acc+cur,0)/array.length : 0;
  }
