// Write a function which converts the input string to uppercase.

describe("Basic Tests", function(){
    it("should pass the basic tests", function(){
      Test.assertEquals(makeUpperCase("hello"), "HELLO");
    });
  });

// my code


function makeUpperCase(str) {
    return str.toUpperCase()
  }