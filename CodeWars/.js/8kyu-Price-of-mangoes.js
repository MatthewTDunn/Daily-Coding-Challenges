// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Examples
// mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free

describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(mango(3, 3), 6)
  Test.assertEquals(mango(9, 5), 30)
    });
  });

//my code

function mango(quantity, price){
  const bonusMango = Math.floor(quantity/3)
  return (quantity-bonusMango)*price
}