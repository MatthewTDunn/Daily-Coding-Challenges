// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(XO('xo'),true);
  Test.assertEquals(XO("xxOo"),true);
  Test.assertEquals(XO("xxxm"),false);
  Test.assertEquals(XO("Oo"),false);
  Test.assertEquals(XO("ooom"),false);
    });
  });
  
// my code

function XO(str) {
    const strArr = str.toLowerCase().split('')
    console.log(strArr)
    let count=0;
    for (let i=0;i<strArr.length;i++){
      
      (strArr[i] == 'x') ? count++ : (strArr[i] == 'o') ? count-- : null
      console.log(count)
    }
    return (count == 0) ? true : false
    
  }