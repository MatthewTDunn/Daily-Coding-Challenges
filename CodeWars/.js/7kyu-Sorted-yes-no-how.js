// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

const Test = require('@codewars/test-compat');

describe("isSortedAndHow", function() {

  it("[1, 2]", function() {
    Test.assertEquals(isSortedAndHow([1, 2]), 'yes, ascending');
  });
  
  it("[15, 7, 3, -8]", function() {
    Test.assertEquals(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
  });
  
  it("[4, 2, 30]", function() {
    Test.assertEquals(isSortedAndHow([4, 2, 30]), 'no');
  });

});

// my code

function isSortedAndHow(array) {
    let ascendingCount = 1
    let descendingCount = 1
    for (let i=0;i<array.length; i++) {
      if (i !=0) {
        (array[i] > array[i-1]) ? ascendingCount++ : descendingCount++
      }
    }
    return (ascendingCount == array.length) ? 'yes, ascending' : (descendingCount == array.length) ? 'yes, descending' : 'no'
  }