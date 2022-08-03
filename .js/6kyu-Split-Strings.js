// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// const { assert } = require('chai');

describe("Split Strings", () => {
  it("Basic tests", () => {
    assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
    assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
    assert.deepEqual(solution(""), []);
  });
});

// my code

// 
// @param: a string
// @return: the string, broken down into array indexes of 2 characters each
// 

function solution(str){
    const splitString = str.split('')
    let returnString = []
    for (let i=0;i<splitString.length;i+=2){
      (i+1 == splitString.length) ? returnString.push(`${splitString[i]}_`) : returnString.push(splitString[i]+splitString[i+1]) 
    }
    return returnString
 }