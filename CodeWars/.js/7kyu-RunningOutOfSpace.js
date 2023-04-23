// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

describe("Tests", () => {
    it("test", () => {
  Test.assertSimilar(spacey(['kevin', 'has','no','space']), [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']);
  Test.assertSimilar(spacey(['this','cheese','has','no','holes']), ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']);
    });
  });

  //my code

  function spacey(array){
    let returnArr = []
    let concatString = ''
    for (let i=0;i<array.length;i++) {
      concatString = concatString.concat(array[i])
      returnArr.push(concatString)
    }
    return returnArr;
  }