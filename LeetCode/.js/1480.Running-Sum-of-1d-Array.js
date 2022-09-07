// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]
 

// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

// my code

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {    
    let returnArr = []
    for (let i=0;i<nums.length;i++){
        returnArr[i] = (i !=0) ? returnArr[i-1]+nums[i] : nums[i]
    }
    return returnArr;
};

// Comparison 

// Runtime: 75 ms, faster than 77.74% of JavaScript online submissions for Running Sum of 1d Array.
// Memory Usage: 42.9 MB, less than 12.04% of JavaScript online submissions for Running Sum of 1d Array.