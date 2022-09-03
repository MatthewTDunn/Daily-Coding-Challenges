// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

describe("Tests", () => {
    it("test", () => {
  Test.assertSimilar(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
    });
  });
  
  // my code

  var uniqueInOrder=function(iterable){
    let returnArr = []
    let splitIterable = (Array.isArray(iterable)) ? iterable : iterable.split('')
    
    for (let i=0;i<splitIterable.length;i++){
      if (splitIterable[i] != splitIterable[i-1]){
        returnArr.push(splitIterable[i])
      }
    }
    return returnArr
  }
