// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(squareSum([1,2]), 5)
  Test.assertEquals(squareSum([0, 3, 4, 5]), 50)
  Test.assertEquals(squareSum([]), 0)
  });
  });
  

// my code

function squareSum(numbers){
    let squaredAccumulator = numbers.reduce( (acc,c) => (c*c) + acc,0 )
    return squaredAccumulator
  }