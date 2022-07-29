// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

describe("Basic tests", function(){
    Test.assertDeepEquals(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
    Test.assertDeepEquals(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
    Test.assertDeepEquals(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
    Test.assertDeepEquals(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
    });

// my code

// 
// @param: string
// @return: two index array with alternative case strings (even & odd respectively)
// 

function capitalize(s){
    const splitString = s.split('')
    let evenString = []
    let oddString = []
    for (let i=0;i<splitString.length;i++){
      (i%2==0) ? evenString.push(splitString[i].toUpperCase()) : evenString.push(splitString[i].toLowerCase())
    }
    for (let i=0;i<splitString.length;i++){
      (i%2==0) ? oddString.push(splitString[i].toLowerCase()) : oddString.push(splitString[i].toUpperCase())
    }
    return [evenString.join(''),oddString.join('')]
  };