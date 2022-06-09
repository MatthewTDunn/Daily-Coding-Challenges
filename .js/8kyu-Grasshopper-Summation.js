// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8


describe('summation', function () {
    it('should return the correct total', function () {
      Test.assertEquals(summation(1), 1)
      Test.assertEquals(summation(8), 36)
    })
  })
  

  // my code

  function summation(num){
    let returnNum = 0;
    for (let i=0;i<=num;i++){
      returnNum = returnNum+i
    }
    return returnNum
    
  }
  