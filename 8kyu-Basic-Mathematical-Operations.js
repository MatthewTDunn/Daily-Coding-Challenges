// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

describe("Tests", () => {
    it("test", () => {
  console.log("Basic tests\n");
  Test.assertSimilar(basicOp('+', 4, 7), 11);
  Test.assertSimilar(basicOp('-', 15, 18), -3);
  Test.assertSimilar(basicOp('*', 5, 5), 25);
  Test.assertSimilar(basicOp('/', 49, 7), 7);
    });
  });

  //my code
  
  function basicOp(operation, value1, value2){
    return (operation == '+') ? value1+value2 : (operation == '-') ? value1-value2 : (operation == '*') ? value1*value2 : value1/value2 
  
  }