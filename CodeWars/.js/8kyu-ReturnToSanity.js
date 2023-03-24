// This function should return an object, but it's not doing what's intended. What's wrong?

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertDeepEquals(mystery(), {sanity: 'Hello'}, 'Mystery has not returned to sanity');
});
});

function mystery() {
    var results =
      {sanity: 'Hello'};
    return results;
  }