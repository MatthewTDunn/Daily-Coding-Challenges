// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

// my code

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let returnArr = []
    for (let i=0;i<strs[0].length;i++){
        let commonChar = strs[0][i]
        let commonCount = 0
        for (let j=0;j<strs.length;j++){
            if (strs[j][i] === commonChar) {
                commonCount++
            }
        }
        if (commonCount == strs.length) {
            returnArr.push(commonChar)
        } else{
            break;
        }
    }
    return returnArr.join('')
};

// code comparison

// Success
// Details 
// Runtime: 89 ms, faster than 62.53% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 42.6 MB, less than 57.40% of JavaScript online submissions for Longest Common Prefix.
// Next challenges: