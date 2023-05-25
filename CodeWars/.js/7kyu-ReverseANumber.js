// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

describe("Sample tests", () =>{
    Test.assertEquals(reverseNumber(123), 321)
    Test.assertEquals(reverseNumber(-123), -321, 'Negative Numbers should be preserved')
    Test.assertEquals(reverseNumber(1000), 1, 'Should handle numbers ending with "0"')
    Test.assertEquals(reverseNumber(4321234), 4321234)
    Test.assertEquals(reverseNumber(5), 5)
    Test.assertEquals(reverseNumber(0), 0)
    Test.assertEquals(reverseNumber(98989898), 89898989)
  });
  
// my code

const reverseNumber = (n) => (n >= 0) ? Number(String(n).split('').reverse().join('')) : Number(String(Math.abs(n)).split('').reverse().join(''))*-1;