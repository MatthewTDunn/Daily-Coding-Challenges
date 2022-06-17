// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

describe("Add two numbers", function(){
    it("should pass basic tests", function() {
      Test.assertEquals(add("1", "1"), "2");
      Test.assertEquals(add("123", "456"), "579");
      Test.assertEquals(add("888", "222"), "1110");
      Test.assertEquals(add("1372", "69"), "1441");
      Test.assertEquals(add("12", "456"), "468");
      Test.assertEquals(add("101", "100"), "201");
      Test.assertEquals(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")
    });
  });

//  my code


function add(a, b) {
  //   This KATA does not accept BigInt library, thus alternative workaround employed
  
    
  //   function to handle conversion of large numbers via string split loop
    function convertNonSafeInt(){
      a = a.split('')
      b = b.split('')
      // c is the addition of the two numbers at index [i]     
      let c = ''
      // we unshift each calculated addition to the returnArr     
      let returnArr = []
      // if the addition of the two inidvidual integers (<=9) is greater than 9, we store the carry over figure to next addition  
      let carryForward = 0
      
      // Determine which number contains less figures and pad beginning with 0s until it matches length of the longest
      if (a.length > b.length) {
        for (let i=b.length;i<a.length;i++){
          b.unshift('0')
        } 
      } else {
        for (let i=a.length;i<b.length;i++){
          a.unshift('0')
        }
      }
      
      // Loop through input arrays and add each integer at position i for both.
      for (let i=a.length-1;i>=0;i--){      
        // calculate the two numbers at index [i] and split them into two halves for passing to next figure and current         
        c = (Number(a[i]) + Number(b[i]) + carryForward).toString().split('')
        returnArr.unshift(c[c.length-1])
        if (c.length>1) {carryForward = Number(c[0])} else {carryForward = 0}
      }
      // Test case to handle final carryForward figure (assuming there is one)
      if (carryForward != 0) {returnArr.unshift(carryForward)}
      return returnArr.join('')
      
    }
    //  Determine if sum > MAX_SAFE_INTEGER and if so, execute function; otherwise store appropriate sum to be returned   
    const sum = ((Number(a)+Number(b)) <= Number.MAX_SAFE_INTEGER) ? (Number(a) + Number(b)).toString() : convertNonSafeInt()
    
    return sum
  }
