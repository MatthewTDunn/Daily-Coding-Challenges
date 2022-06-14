// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(sumStrings('123','456'),'579')
    });
  });
  
  // my code

  function sumStrings(a,b) { 
  
    //   Function to handle BigInt values
    
    function convertToBigInt(){
      a = BigInt(a)
      b = BigInt(b)
      return (a+b).toString()
    }
    //  Determine if BigInt and if so, execute convertToBigInt function; otherwise store appropriate sum to be returned   
    const sum = (Number(a)+Number(b) >= Number.MAX_SAFE_INTEGER) ? convertToBigInt() : (Number(a)+Number(b)).toString()
    
    return sum
  }