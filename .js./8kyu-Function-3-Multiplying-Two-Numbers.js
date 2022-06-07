// Implement a function which multiplies two numbers.

const chai = require('chai');
const assert = chai.assert;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(multiply(2, 3), 6);
  });
});

// my code

function multiply(a,b) {
    return a*b
    }
