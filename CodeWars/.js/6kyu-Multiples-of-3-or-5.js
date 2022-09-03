// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

const { assert } = require("chai")

function test(n, expected) {
  let actual = solution(n)
  it(`Expected ${expected}, got ${actual}`, () => {  
  assert.strictEqual(actual, expected)
    })
}

describe("basic tests", function(){
  test(10,23)
})

// my code

function solution(number){
    let numberTotal=0;
    for (let i=0;i<number;i++){
      let mod3 = i%3;
      let mod5 = i%5;
      if (mod3==0){
        numberTotal=numberTotal+i;
      }
      else if (mod5==0){
        numberTotal=numberTotal+i;
      }
    }
    return(numberTotal)
  }
