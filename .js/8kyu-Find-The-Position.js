// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(position("a"),"Position of alphabet: 1");
  Test.assertEquals(position("z"),"Position of alphabet: 26");
  Test.assertEquals(position("e"),"Position of alphabet: 5");
    });
  });
  
// my code

// 
// @param: alphabetic character
// @return: string with the alphabetic number position
// 

function position(letter){
    return `Position of alphabet: ${(letter.toUpperCase().charCodeAt())-64}`
  }