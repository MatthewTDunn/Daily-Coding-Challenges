// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example(Input --> Output):

// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

 const chai = require("chai");
 const assert = chai.assert;
 chai.config.truncateThreshold=0;
 
 describe("monkeyCount", () => {
   it("should work for fixed tests", () => {
     assert.deepEqual((monkeyCount(5)), [1, 2, 3, 4, 5]);
     assert.deepEqual((monkeyCount(3)), [1, 2, 3]);
     assert.deepEqual((monkeyCount(9)), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
     assert.deepEqual((monkeyCount(10)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
     assert.deepEqual((monkeyCount(20)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
   });
 });

//  my code

// 
// @param: integer
// @return: array of integers from 1 to n
// 

function monkeyCount(n) {
    let returnArr = []
    for (let i=1;i<=n;i++){
      returnArr.push(i)
    }
    return returnArr
}
