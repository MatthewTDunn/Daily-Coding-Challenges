// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

// Note: if this seems too simple for you try the next level

describe("Tests", () => {
    it("test", () => {
  var data = [2,4,5,2];
  Test.expect( printArray( data ) ==
    "2,4,5,2", "int test failed" )
    });
  });
  
// my code

// 
// @param: string
// @return: comma separated version of input string
// 

function printArray(array){
    let interArr = array.map(x => x +',').join('').split('')
    interArr.pop()
    return interArr.join('')
}
