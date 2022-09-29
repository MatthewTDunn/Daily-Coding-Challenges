// Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// combineNames('James', 'Stevens')
// returns:

// 'James Stevens'

describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(combineNames('James', 'Stevens'), 'James Stevens')
    });
  });
  

//   my code

function combineNames(nameA, nameB) {
    return nameA + ' ' + nameB;
  }
  
  // Create the combineNames function here