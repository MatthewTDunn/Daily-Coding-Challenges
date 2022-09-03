// Grasshopper - Function syntax debugging
// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.

describe("Tests", () => {
    it("test", () => {
  Test.expectNoError(main)
  Test.assertEquals(main('take ', 'item'), 'take item')
  Test.assertEquals(main('use ', 'sword'), 'use sword')
    });
  });

  
// my code

function main(verb, noun){
    return verb + noun
  }
