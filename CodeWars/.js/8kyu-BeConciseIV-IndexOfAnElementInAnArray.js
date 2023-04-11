// Be Concise IV - Index of an element in an array
// Task
// Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.

describe("Your refactored find() function", () => {
    it("should behave as expected", () => {
      var array = [2,3,5,7,11];
      Test.assertEquals(find(array, 5), 2);
      Test.assertEquals(find(array, 11), 4);
      Test.assertEquals(find(array, 3), 1);
      Test.assertEquals(find(array, 2), 0);
      Test.assertEquals(find(array, 7), 3);
      Test.assertEquals(find(array, 1), "Not found");
      Test.assertEquals(find(array, 8), "Not found");
      array = [true, "Hello World", false, "Lorem Ipsum", 6, Math.PI];
      Test.assertEquals(find(array, "Hello World"), 1);
      Test.assertEquals(find(array, "lorem ipsum"), "Not found");
      Test.assertEquals(find(array, "Lorem Ipsum"), 3);
      Test.assertEquals(find(array, false), 2);
      Test.assertEquals(find(array, true), 0);
      Test.assertEquals(find(array, Math.PI), 5);
      Test.assertEquals(find(array, 3.14), "Not found");
      Test.assertEquals(find(array, 6), 4);
    });
});

const find = (a, e) => (a.includes(e)) ? a.indexOf(e) : "Not found";