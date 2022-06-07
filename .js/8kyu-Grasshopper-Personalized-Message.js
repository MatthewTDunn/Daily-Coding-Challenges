// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(greet('Daniel', 'Daniel'), 'Hello boss')
  Test.assertEquals(greet('Greg', 'Daniel'), 'Hello guest')
    });
  });

  
  // my code

  function greet (name, owner) {
    return (name == owner) ? `Hello boss` : `Hello guest`
  }
