// Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

// For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

// So:

// Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(mostLikely('1:3','1:2'),false);

  });
});

// my code

function mostLikely(prob1,prob2){
    const prob1Conv = prob1.split(':');
    const prob2Conv = prob2.split(':');
    return (Number(prob1Conv[0])/Number(prob1Conv[1]) > Number(prob2Conv[0])/Number(prob2Conv[1]));
}