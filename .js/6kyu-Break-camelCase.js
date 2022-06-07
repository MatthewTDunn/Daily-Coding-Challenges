// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(solution('camelCasing'), 'camel Casing', 'Unexpected result')
  Test.assertEquals(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')
  
  });
  });
  

// my code

// complete the function
function solution(string) {
    return string.replace(/([A-Z])/g, " $1" )
  }
