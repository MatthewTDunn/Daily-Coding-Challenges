// There is an object/class already created called MrFreeze. Mark this object as frozen so that no other changes can be made to it.

const chai = require("chai");
const assert = chai.assert;

describe("Solution", function() {
  it("should test for something", function() {
    MrFreeze.speak = function() {return 1;}
    assert.strictEqual(MrFreeze.speak(), "hi", 'MrFreeze was able to be modified')
    assert.strictEqual(Object.isFrozen(MrFreeze), true, 'MrFreeze is not frozen')
  });
});

Object.freeze(MrFreeze)