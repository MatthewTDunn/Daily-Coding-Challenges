// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

const strictEqual = require("chai").assert.strictEqual;

function doTest (input, expected) {
	const actual = remove(input);
	strictEqual(actual, expected, `for string:\n"${input}"\n`);
}

it("It should works for basic tests", function () {
	doTest("Hi!", "Hi")
	doTest("Hi!!!", "Hi")
	doTest("!Hi", "!Hi")
	doTest("!Hi!", "!Hi")
	doTest("Hi! Hi!", "Hi! Hi")
	doTest("Hi", "Hi")
});

// my code

// 
// @param: string
// @return: string with any tailing '!' removed
// 

function remove (string) {  
    const splitString = string.split('')
    for (let i=splitString.length-1;i>0;i--){
      if (splitString[i] == '!'){
        splitString.pop()
      } else {
        break;
      }
    }
    return splitString.join('')
  }
