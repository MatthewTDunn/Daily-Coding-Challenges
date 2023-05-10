// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 14

const { assert } = require('chai');

describe("Tests", () => {
  it("Fixed tests", () => {
    assert.strictEqual(getSumOfDigits(123), 6, 'Incorrect answer for integer=123');
    assert.strictEqual(getSumOfDigits(223), 7, 'Incorrect answer for integer=223');
    assert.strictEqual(getSumOfDigits(0), 0, 'Incorrect answer for integer=0');
  });
});

// my code

const getSumOfDigits = (integer) => String(integer).split('').reduce((acc, cur) => acc+parseInt(cur),0);