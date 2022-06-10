// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(nameShuffler('john McClane'),'McClane john');
    });
  });

  // my code

  function nameShuffler(str){
    return str.split(' ').reverse().join(' ')
  }