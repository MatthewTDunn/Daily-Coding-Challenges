// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).


describe("Basic tests",() =>{
    Test.assertEquals(billboard("Matthew Dunn"), 360);
    Test.assertEquals(billboard("Jeong-Ho Aristotelis"), 600);
    Test.assertEquals(billboard("Abishai Charalampos"), 570);
    Test.assertEquals(billboard("Idwal Augustin"), 420);
    Test.assertEquals(billboard("Hadufuns John",20), 260);
    Test.assertEquals(billboard("Zoroaster Donnchadh"), 570);
    Test.assertEquals(billboard("Claude Miljenko"), 450);
    Test.assertEquals(billboard("Werner Vígi",15), 165);
    Test.assertEquals(billboard("Anani Fridumar"), 420);
    Test.assertEquals(billboard("Paolo Oli"), 270);
    Test.assertEquals(billboard("Hjalmar Liupold",40), 600);
    Test.assertEquals(billboard("Simon Eadwulf"), 390);
})

// my code

function billboard(name, price = 30){
    const splitName = name.split('')
    let returnPrice = 0
    for (let i=0; i<splitName.length;i++) {
      returnPrice = returnPrice+price
    }
    return returnPrice
} 