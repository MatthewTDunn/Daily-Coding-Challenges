// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Example:
//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Two fighters, one winner.", () => {
  it("Example Test Cases", () => {
    
    assert.strictEqual(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), "Lew");

    assert.strictEqual(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"), "Harry");

    assert.strictEqual(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"), "Harald")

    assert.strictEqual(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"), "Harald")

    assert.strictEqual(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"), "Harald")

    assert.strictEqual(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"), "Harald")

  });
});

//  my code

function declareWinner(fighter1, fighter2, firstAttacker) {  
    let fighter2rounds = 0
    let fighter1rounds = 0
    
    function fighter1Health(){
      do {
        fighter1.health = fighter1.health-fighter2.damagePerAttack
        fighter1rounds++
      } while (fighter1.health > 0)
      return fighter1rounds
    }
    
    function fighter2Health(){
      do {
        fighter2.health = fighter2.health-fighter1.damagePerAttack
        fighter2rounds++
      } while (fighter2.health > 0)
      return fighter2rounds
    }
    
    fighter1Health()
    fighter2Health()
    console.log(fighter1rounds)
    console.log(fighter2rounds)
    
    return (fighter1rounds == fighter2rounds) ? firstAttacker : (fighter1rounds > fighter2rounds) ? fighter1.name : fighter2.name
  }
