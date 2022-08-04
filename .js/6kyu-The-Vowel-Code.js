// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

describe("Sample tests", function() {
    it("Tests", function() {
      assert.equal(encode('hello'), 'h2ll4');
      assert.equal(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
      assert.equal(encode('This is an encoding test.'), 'Th3s 3s 1n 2nc4d3ng t2st.');
      assert.equal(decode('h2ll4'), 'hello');
    });
  });

// my code

//
// @param: either an encoded or decoded string as outlined in test instructions
// @return: encoded/decoded string according to an alphanumeric conversion
//

function encode(string) {
    // create reference object/key for alpha to numeric vowel conversion
    const alphaKey = {
      a : 1,
      e : 2,
      i : 3,
      o : 4,
      u : 5
    }
    // establish the intermediate and return string
    const splitString = string.split('')
    let returnString = []
    // loop through input string characters, determine if character exists in vowel key object
    // if so, push numeric reference to return string in its place, else push normal character
    for (let i=0;i<splitString.length;i++){
      if (splitString[i] in alphaKey) {
        returnString.push(alphaKey[splitString[i]])
      } else {
        returnString.push(splitString[i])
      }
    }
    // join the array and return it
    return returnString.join('')
  }
  
  function decode(string) {
    // create reference object/key for numeric to vowel conversion
    const numericKey = {
      1 : 'a',
      2 : 'e',
      3 : 'i',
      4 : 'o',
      5 : 'u'
    }
    // establish the intermediate and return string
    const splitString = string.split('')
    let returnString = []
    // loop through input string characters, determine if number exists in key object
    // if so, push alpha reference to return string in its place, else push normal character
    for (let i=0;i<splitString.length;i++){
      if (splitString[i] in numericKey) {
        returnString.push(numericKey[splitString[i]])
      } else {
        returnString.push(splitString[i])
      }
    }
    // join the array and return it
    return returnString.join('')
  }