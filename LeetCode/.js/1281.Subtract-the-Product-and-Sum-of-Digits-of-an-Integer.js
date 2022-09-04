// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

// Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15
// Example 2:

// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21
 

// Constraints:

// 1 <= n <= 10^5

// my code

/**
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
    const splitInput = String(n).split('')
    return splitInput.reduce((cur,acc) => cur*acc,1) - splitInput.reduce((cur,acc) => Number(cur)+Number(acc),0)
};

// code comparison

// Success
// Details 
// Runtime: 76 ms, faster than 70.65% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
// Memory Usage: 42.2 MB, less than 52.77% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.