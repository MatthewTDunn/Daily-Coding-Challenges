// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(digPow(89, 1), 1)
  Test.assertEquals(digPow(92, 1), -1)
  Test.assertEquals(digPow(46288, 3), 51)
  
    });
  });

  // my code

  function digPow(n, p){
    const stringN = n.toString().split('')
    let returnTotal = 0
    for (let i=0;i<stringN.length;i++){
      returnTotal = returnTotal+Math.pow(Number(stringN[i]),p+i)
    }
    return (Number.isInteger(returnTotal/n)) ? (returnTotal/n) : -1
    
  }
