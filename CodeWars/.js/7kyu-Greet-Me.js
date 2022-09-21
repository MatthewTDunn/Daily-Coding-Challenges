// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

// describe("Tests", () => {
//     it("test", () => {
//   // Create your own tests here. These are some of the methods available:
//   //  Test.expect(boolean, [optional] message) 
//   //  Test.assertEquals(actual, expected, [optional] message)
//   //  Test.assertSimilar(actual, expected, [optional] message)
//   //  Test.assertNotEquals(actual, expected, [optional] message) 
//   Test.assertEquals(greet('riley'), 'Hello Riley!');
//     });
//   });
  
// my code:

var greet = function(name) {
    let splitName = name.split('')
    for (let i=0;i<splitName.length;i++) {
      splitName[i] = (i == 0) ? String(splitName[i]).toUpperCase() : String(splitName[i]).toLowerCase() 
    }
    return `Hello ${splitName.join('')}!`
};