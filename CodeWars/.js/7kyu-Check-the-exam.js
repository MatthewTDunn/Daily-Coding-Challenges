// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
    assert.strictEqual(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7);
    assert.strictEqual(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
    assert.strictEqual(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0);  
  });
});

// 

// 
// @param: array of string test scores
// @return: reduced array with overall score based on test requirements
// 

function checkExam(array1, array2) {
    let returnArr = []
    for (let i=0;i<array1.length;i++){
      if (array1[i] == array2[i]) {
        returnArr.push(4)
      } else if (array1[i] == "" || array2[i] == ""){
        returnArr.push(0)
      } else {
        returnArr.push(-1)
      }
    }
     console.log(returnArr)
     return (returnArr.reduce((cur, acc) => cur+acc,0) < 0) ? 0 : returnArr.reduce((cur, acc) => cur+acc,0)
}