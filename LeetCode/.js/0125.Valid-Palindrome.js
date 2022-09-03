// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

// my code

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    //  establish regex to remove all non alphanumeric characters
    const regex = /[^a-z0-9]/gi
    //  remove all non-alphanumeric characters
    s = s.toLowerCase().replace(regex,'').split('')
    //  bool, return     
    return s.join('') == s.reverse().join('')
};

// code comparison

// Success
// Details 
// Runtime: 105 ms, faster than 59.50% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 48.2 MB, less than 24.77% of JavaScript online submissions for Valid Palindrome.