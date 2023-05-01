// Given an array of numbers, return the difference between the largest and smallest values.

// For example:

// [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

// [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

// The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(betweenExtremes([21, 34, 54, 43, 26, 12]), 42);
Test.assertEquals(betweenExtremes([-1, -41, -77, -100]), 99);
  });
});

// my code

const betweenExtremes = (numbers) => Math.max(...numbers) - Math.min(...numbers);