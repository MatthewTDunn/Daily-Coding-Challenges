// 205. Isomorphic Strings
// Easy

// 4595

// 837

// Add to List

// Share
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
 

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

// my code

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    // immediately render the comparison false if the length is not 1:1
    if (s.length != t.length) {
        return false
    }
    let obj1 = {},
        obj2 = {}
    
    for (let i=0;i<s.length;i++){
        if (obj1[s[i]] !== obj2[t[i]]) {
            return false
        } else {
            obj1[s[i]] = i,
            obj2[t[i]] = i
        }
    }
    return true
};

// evalutaion statistics

// Success
// Details 
// Runtime: 75 ms, faster than 95.52% of JavaScript online submissions for Isomorphic Strings.
// Memory Usage: 42 MB, less than 95.25% of JavaScript online submissions for Isomorphic Strings.