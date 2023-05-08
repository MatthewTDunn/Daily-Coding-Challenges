// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"
// Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.

describe("Tests", function() {

    const chai = require('chai');
    chai.config.truncateThreshold = 0;
      const { strictEqual } = chai.assert;
  
      function doTest(input, expected) {
          const actual = removeConsecutiveDuplicates(input);
          strictEqual(actual, expected, `for string = "${input}"\n`);
      }
  
      it("Fixed tests", function() {
          doTest("", "");
          doTest("alpha", "alpha");
          doTest("alpha alphaalpha alphaalphaalpha", "alpha alphaalpha alphaalphaalpha");
          doTest(
              "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta",
              "alpha beta gamma delta alpha beta gamma delta"
          );
          doTest("alpha alpha alpha alpha", "alpha");
          doTest("alpha beta alpha", "alpha beta alpha");
          doTest("alpha alphabeta alphagamma", "alpha alphabeta alphagamma");
          doTest("alpha alpha beta alpha alpha", "alpha beta alpha");
          doTest("alpha beta beta", "alpha beta");
      });
  });

// my code
function removeConsecutiveDuplicates(string) {
    const splitString = string.split(' ');
    let returnArr = [];
    for (let i=0;i<splitString.length;i++) {
      (splitString[i] === splitString[i+1]) ? null : returnArr.push(splitString[i]);
    }
    return returnArr.join(' ');
}