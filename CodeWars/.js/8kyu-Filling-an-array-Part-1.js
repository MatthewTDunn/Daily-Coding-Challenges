// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.


describe('#arr creates a new array with the numbers 0 to N-1',() =>{
    it('should return an array',_=>Test.expect(arr() instanceof Array));
    it('should return a blank array when called with no argument',_=>Test.assertSimilar(arr(), []));
    it('should return 0 to 3 when called with 4',_=>Test.assertSimilar(arr(4), [0,1,2,3]));
  });

  // my code

  function arr(n){
    let returnArr = []
    for (let i=0;i<n;i++){
      returnArr.push(i)
    }
    return returnArr
  }
