// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

describe("Solution", function(){
    it("Example tests", function(){
      Test.assertEquals(digits(5), 1, "Fail!");
      Test.assertEquals(digits(12345), 5, "Fail!");
      Test.assertEquals(digits(9876543210), 10, "Fail!");
    });
  });

// my code

// 
// @param: integer 
// @return: the count of digits
// 

function digits(n) {
    return String(n).split('').length
  }
