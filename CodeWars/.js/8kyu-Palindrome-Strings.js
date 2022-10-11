// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

// Examples(Input ==> Output)
// "anna"   ==> true
// "walter" ==> false
// 12321    ==> true
// 123456   ==> false

describe("Palindrome", function() {
    it("should identifies that a string is palindrome", function() {
        Test.assertEquals(isPalindrome("anna"), true);
    });
    
    it("should identifies that a string is not palindrome", function() {
        Test.assertEquals(isPalindrome("walter"), false);
    });
    
    it("should identifies that a number is palindrome", function() {
        Test.assertEquals(isPalindrome(12321), true);
    });
    
    it("should identifies that a number is not palindrome", function() {
        Test.assertEquals(isPalindrome(123456), false);
    });
    
    it("should identifies that a string is palindrome on punctuation", function() {
        Test.assertEquals(isPalindrome("."), true);
    });
    
    it("should identifies that a string is palindrome on punctuation", function() {
        Test.assertEquals(isPalindrome(".!!."), true);
    });
});

// my code

// 
// @param: integer or string
// @return: boolean if input is 
// 

function isPalindrome(line) {
    return (String(line).split('').reverse().join('') == line)
  }