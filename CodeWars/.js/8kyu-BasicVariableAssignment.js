// This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(name, "codewa.rs");
    })
})

var a = "code";
var b = "wa.rs";
var name = a + b;