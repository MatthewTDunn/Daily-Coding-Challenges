// Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

// Go to work!

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Holiday III - Fire on the boat", () => {
  it("Fixed tests", () => {
    assert.strictEqual(fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"), "Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast");
    assert.strictEqual(fireFight("Mast Deck Engine Water Fire"), "Mast Deck Engine Water ~~");
    assert.strictEqual(fireFight("Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain"), "~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain");
  });
});

// my code

function fireFight(s){
    const splitString = s.split(' ')
    for (let i=0;i<splitString.length;i++) {
      (splitString[i] == 'Fire') ? splitString[i] = '~~' : null 
    }
    return splitString.join(' ')
  }