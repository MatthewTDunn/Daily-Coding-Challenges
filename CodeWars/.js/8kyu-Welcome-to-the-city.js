// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", () => {
  it("Should pass Sample Tests", () => {
    assert.strictEqual(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'), 'Hello, John Smith! Welcome to Phoenix, Arizona!')
    assert.strictEqual(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'), 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!')
    assert.strictEqual(sayHello(['Wallace','Russel','Osbourne'],'Albany','New York'), 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!')
  });
});

// my code

// 
// @param: three string inputs for name, city, state
// @return: welcome string
// 

function sayHello( name, city, state ){
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
  }