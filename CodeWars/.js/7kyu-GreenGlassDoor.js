// Step through my green glass door.

// You can take the moon, but not the sun.

// You can take your slippers, but not your sandals.

// You can go through yelling, but not shouting.

// You can't run through fast, but you can run with speed.

// You can take a sheet, but not your blanket.

// You can wear your glasses, but not your contacts.

// Have you figured it out? Good! Then write a program that can figure it out as well.

const Test = require('@codewars/test-compat');

describe("stepThroughWith", function() {
  it("works for some examples", function() {
    Test.assertEquals(stepThroughWith("moon"), true, "You can take the moon, but not the sun");
    Test.assertEquals(stepThroughWith("test"), false, "You can take a challenge, but not a test");
    Test.assertEquals(stepThroughWith("glasses"), true, "You can take your glasses, but not your contacts");
    Test.assertEquals(stepThroughWith("airplane"), false, "You can take a balloon, but not an airplane");
    Test.assertEquals(stepThroughWith("free"), true, "You can be free, but not in chains");
    Test.assertEquals(stepThroughWith("branch"), false, "You can take the tree or the wood, but not a branch");
  });
});

// my code

function stepThroughWith(s) {
    const splitS = s.split('')
    for (let i=0;i<splitS.length;i++) {
      if (splitS[i] === splitS[i+1]) {
        return true
      }
    }
    return false
  }