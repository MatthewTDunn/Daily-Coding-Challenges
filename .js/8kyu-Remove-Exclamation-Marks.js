// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");
  });
});

// my code

function removeExclamationMarks(s) {
    const regex = /[!]/gi
    return s.replace(regex,'');
  }