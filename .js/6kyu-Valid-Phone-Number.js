// Write a function that accepts a string, and returns true if it is in the form of a phone number.
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses)

// Examples:

// "(123) 456-7890"  => true
// "(1111)555 2345"  => false
// "(098) 123 4567"  => false

describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(validPhoneNumber("(123) 456-7890"), true);
    });
  });
  
// my code

function validPhoneNumber(phoneNumber){
    console.log(phoneNumber.length)
    if (phoneNumber.length == 14){  
    if (phoneNumber.substring(0,1) == '(') {
      if (phoneNumber.substring(4,6) == ') ') {
          if (phoneNumber.substring(9,10) == '-'){
            return true;
          }
          else{
      return false;
    }
      } 
        else{
      return false;
    }
    }
    else{
      return false;
    }
  }
    else{
      return false;
    }
  }
