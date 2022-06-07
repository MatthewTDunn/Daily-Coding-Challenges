// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!


describe("doubleChar", function() {
    it("works for some examples", function() {
      Test.assertEquals(doubleChar("abcd"), "aabbccdd");
      Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
      Test.assertEquals(doubleChar("1337"), "11333377");
      Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
      Test.assertEquals(doubleChar("123456"), "112233445566");
      Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");
    });
  });
  

//   my code

function doubleChar(str) {
    const splitString = str.split('')
    let returnString = []
    for (let i=0;i<splitString.length;i++){
      returnString.push(splitString[i])
      returnString.push(splitString[i])
    }
    return returnString.join('')
  }
  
