// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(alphanumeric("Mazinkaiser"), true)
  Test.assertEquals(alphanumeric("hello world_"), false)
  Test.assertEquals(alphanumeric("PassW0rd"), true)
  Test.assertEquals(alphanumeric("     "), false)
    });
  });
  
// my code

function alphanumeric(string){
    //literal notation declaration of regular expression
    console.log(string)
    let regExp = / |_|!|  |&/gmi
    let filteredString = regExp.test(string)
    console.log(regExp.test(string))
    if (string === ""){
      return false
    }
    if (filteredString === true){
      return false
    }else{
      return true
    }
    console.log(filteredString)
    
    
    
  }