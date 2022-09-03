// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
  Test.assertEquals(pigIt('This is my string'),'hisTay siay ymay tringsay')
  });
  });
  
// my code

// 
// @param: string in the form of a sentence
// @return: 'pig latin' conversion of input string
// 

function pigIt(str){
    // establish the intermediate & return arrays
    const splitString = str.split(' ')
    let returnString = []
    // iterate over the separated WORDS of argument str
    for (let i=0;i<splitString.length;i++){
        // set a temp array holder for pig latin words 
        let pigLatinString = []
        // iterate over the characters within each word
        for (let j=0;j<splitString[i].length;j++){
            // determine whether the character is alpha and process accordingly
            if (splitString[i][j].match(/^[A-Z]/gi)){
                if (j==splitString[i].length-1) { 
                    pigLatinString.push(splitString[i][0]+'ay')
                } else {
                    pigLatinString.push(splitString[i][j+1])
                }
            } else {
                // DO NOT process any character that is not an alpha
                pigLatinString.push(splitString[i][j])
            }
        }
        // push the worked string to the return array
        returnString.push(pigLatinString.join(''))
    }  
    return returnString.join(' ')
  }
