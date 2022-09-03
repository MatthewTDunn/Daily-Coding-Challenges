// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"


const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(peopleWithAgeDrink(22), 'drink whisky');
    })
  })

  // my code

  function peopleWithAgeDrink(old) {
    console.log(old)
    return (old >= 21) ? "drink whisky" : (old > 17) ? "drink beer" : (old > 13) ? "drink coke" : "drink toddy"
  };
