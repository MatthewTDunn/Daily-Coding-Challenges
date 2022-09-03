// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
    assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
    assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')
    })
  })

// my code

function removeUrlAnchor(url){
    let splitURL = url.split('')
    let returnURL = []
    for (let i=0;i<splitURL.length;i++){
      if (splitURL[i] !='#'){
        returnURL.push(splitURL[i]) 
    } else {
      break
    }}
    return returnURL.join('')
    
    
  }
