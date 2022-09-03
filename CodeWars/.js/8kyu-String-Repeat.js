// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

describe("Tests", function() {
    it ("Basic tests", function() {
      Test.assertSimilar(repeatStr(3, "*"), "***");
      Test.assertSimilar(repeatStr(5, "#"), "#####");
      Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");
    });
  });

  // my code

  function repeatStr (n, s) {
    let returnString=""
    for (let i=0;i<n;i++){
      returnString = returnString + s
    }
    
    
    return returnString;
  }
