// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.


const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(sumDigits(10), 1);
    assert.strictEqual(sumDigits(99), 18);
    assert.strictEqual(sumDigits(-32), 5);
    })
  })

//   my code

// 
// @param: integer value
// @return: summed indvidual integers
// 

function sumDigits(number) {
    // split string into array
    const sumNum = number.toString().split('')
    // establish sum array to take final result
    let sumTotal = 0
    // loop through array, summing each value
    for (let i=0;i<sumNum.length;i++){
      console.log(typeof sumNum[i])
      if (sumNum[i] != '-'){
         sumTotal = sumTotal + Number(sumNum[i])   
      }
    }
    return sumTotal
  }
  