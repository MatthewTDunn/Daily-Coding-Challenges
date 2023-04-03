// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual( noOdds( [0,1] ), [0] )
    assert.deepEqual( noOdds( [0,1,2,3] ), [0,2] )
    })
})

function noOdds( values ){
    let returnArr = []
    for (let i=0;i<values.length;i++) {
      (values[i] % 2 == 0) ? returnArr.push(values[i]) : null
    }
    return returnArr
}