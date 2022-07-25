// Create two functions to encode and then decode a string using the Rail Fence Cipher. This cipher is used to encode a string by placing each character successively in a diagonal along a set of "rails". First start off moving diagonally and down. When you reach the bottom, reverse direction and move diagonally and up until you reach the top rail. Continue until you reach the end of the string. Each "rail" is then read left to right to derive the encoded string.

// For example, the string "WEAREDISCOVEREDFLEEATONCE" could be represented in a three rail system as follows:

// W       E       C       R       L       T       E
//   E   R   D   S   O   E   E   F   E   A   O   C  
//     A       I       V       D       E       N    
// The encoded string would be:

// WECRLTEERDSOEEFEAOCAIVDEN
// Write a function/method that takes 2 arguments, a string and the number of rails, and returns the ENCODED string.

// Write a second function/method that takes 2 arguments, an encoded string and the number of rails, and returns the DECODED string.

// For both encoding and decoding, assume number of rails >= 2 and that passing an empty string will return an empty string.

// Note that the example above excludes the punctuation and spaces just for simplicity. There are, however, tests that include punctuation. Don't filter out punctuation as they are a part of the string.

describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3), "WECRLTEERDSOEEFEAOCAIVDEN");
  Test.assertEquals(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3), "WEAREDISCOVEREDFLEEATONCE");
  Test.assertEquals(encodeRailFenceCipher("Hello, World!", 3), "Hoo!el,Wrdl l");
    });
  });


// my code
// 
// @param: input string to be encoded or decoded depending on method called (encodeRailFenceCipher || decodeRailFenceCipher) in addition to encryption rails
// @return: decoded/encoded rail fence cipher string depending on method called (encodeRailFenceCipher || decodeRailFenceCipher) with reference to encryption rails
// 

  function encodeRailFenceCipher(string, numberRails) {
    // Pseudo ENCODING plan:
    // Establish 2D array (interArr) consisting of var(numberRails) individual arrays
    // Modulo numberRails-1 to determine which indexed 2D array to assign individual character
    // Push individual char based on for loop iterable position to their modulo reference array in (interArr)
    // Concat all primary iterables of 2D interArr and return the result.   
    
    //  Establish empty array to hold the inidividual rails 
    let interArr = []
    let returnArr = []
    // Create 2D array depending on how many rails are required  
    for (let i=0;i<numberRails;i++){
        interArr[i] = new Array
    }
    // split the input string for ease of handling later on   
    let inputString = string.split('')
    // required change to input var(numberRails) to handle modulo 
    const amendedNumberRails = numberRails-1
  
    // iterate through string and determine which 2D array rail to put each index on and push them accordingly.   
    for (let i=0;i<inputString.length;i++){    
      // console.log(amendedNumberRails-(Math.abs(i%((amendedNumberRails*2))-amendedNumberRails)) + ` ${inputString[i]}`)
      interArr[(amendedNumberRails-(Math.abs(i%((amendedNumberRails*2))-amendedNumberRails)))].push(inputString[i])    
    }
    // concatenate the split rails into a newly encoded single array   
    for (let i=0;i<interArr.length;i++){
      returnArr = returnArr.concat(interArr[i])
    }
    // join array to form a string and return   
    return returnArr.join('')
  }
  
  function decodeRailFenceCipher(string, numberRails) {
    // Pseudo DECODING plan:
    // Establish 2D array (interArr) consisting of var(numberRails) individual arrays
    // Modulo numberRails-1 to determine how many characters belong in each rail
    // Use modulo figures to split the original string into the appropriate rails
    // shift and unshift values from 2D array into thirdArr
    // join reconstructed values in thirdArr and return decoded string
    
    // Establish 2D array variables and reassembleOrder
    let interArr = []
    let returnArr = []
    let reassembleOrder = []
    // Create 2D array depending on how many rails are required   
    for (let i=0;i<numberRails;i++){
        interArr[i] = new Array
    }
    // split the input string for ease of handling later on 
    let inputString = string.split('')
    // required change to input var(numberRails) to handle modulo 
    const amendedNumberRails = numberRails-1
  
    // iterate through string and determine which 2D array rail to put each index on and push them accordingly.   
    for (let i=0;i<inputString.length;i++){    
      interArr[(amendedNumberRails-(Math.abs(i%((amendedNumberRails*2))-amendedNumberRails)))].push(inputString[i])
      reassembleOrder.push(amendedNumberRails-(Math.abs(i%((amendedNumberRails*2))-amendedNumberRails)))
    }
    // figure to handle parse points in the original input string   
    let splitIndex = 0
    // arrays to handle further transformations prior to return   
    let secondArr = []
    let thirdArr = [] 
    
    for (let i=0;i<interArr.length;i++){
      secondArr.push(string.substring(splitIndex,splitIndex+interArr[i].length))
      secondArr[i] = secondArr[i].split('')
      splitIndex = splitIndex+interArr[i].length
    }
  
    // Work through 2D array rails, pushing subarray indexes from appropriate parent index in
    // accordance with the generated modulo reference in var reassembleOrder   
    for (let i=0;i<inputString.length;i++){  
      // push index of secondArr in accordance with reassembleOrder to new return array thirdArr     
      thirdArr.push(secondArr[reassembleOrder[i]][0])
      // remove the value just pushed from secondArr     
      secondArr[reassembleOrder[i]].shift()
    }
    // join array to form a string and return   
    return thirdArr.join('')
    
  }
  