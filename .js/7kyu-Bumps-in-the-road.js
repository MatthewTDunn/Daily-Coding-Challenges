// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

describe("Bumps in the Road", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(bump("n"), "Woohoo!");
    assert.strictEqual(bump("__nn_nnnn__n_n___n____nn__nnn"), "Woohoo!");
    assert.strictEqual(bump("nnn_n__n_n___nnnnn___n__nnn__"), "Woohoo!");
    assert.strictEqual(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
    assert.strictEqual(bump("______n___n_"), "Woohoo!");
  });
});

// my code

// 
// @param: string consisting of "_" || "n"
// @return: count of n and appropriate string return
// 

function bump(x){
    let xSplit =  x.split('')
    let count = 0
    for (let i=0;i<xSplit.length;i++){
      if (xSplit[i] == "n") {
        count++
      }
    }
    return (count <= 15) ? 'Woohoo!' : 'Car Dead'
}