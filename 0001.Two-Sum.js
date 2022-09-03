// 1. Two Sum
// Easy

// 32165

// 1022

// Add to List

// Share
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
// Accepted
// 6,624,689
// Submissions
// 13,631,978


// MY CODE

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let returnArray = [0,0]
    for (let i=0;i<nums.length;i++){
         for (let j=0;j<nums.length;j++){
             if (nums[i] + nums[j] == target && i != j) {
                 returnArray[0] = j
                 returnArray[1] = i
             }
        }
    }
     return returnArray
     
 };

//  Success
// Details 
// Runtime: 258 ms, faster than 9.02% of JavaScript online submissions for Two Sum.
// Memory Usage: 42 MB, less than 96.64% of JavaScript online submissions for Two Sum.