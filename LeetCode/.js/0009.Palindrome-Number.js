// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.
 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1

// --------------------------------------------------------------------------------------------------------------------------

// my code

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    return (x == String(x).split('').reverse().join(''))
};

// --------------------------------------------------------------------------------------------------------------------------

// code summary

// Success
// Details 
// Runtime: 253 ms, faster than 63.48% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 50.9 MB, less than 63.43% of JavaScript online submissions for Palindrome Number.
