// Problem:
// You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.

// Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.

// Examples:
// You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:

// six_toast(5) == 1
// And in case of 12 you need 6 toasts less (but not -6):

// six_toast(12) == 6


const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(sixToast(6), 0);
Test.assertEquals(sixToast(17), 11);
Test.assertEquals(sixToast(3), 3);
  });
});

// my code

const sixToast = (num) => (num > 6) ? num-6 : 6-num;