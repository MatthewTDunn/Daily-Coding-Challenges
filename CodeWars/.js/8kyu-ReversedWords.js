// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

const { assert } = require('chai');

describe("reverseWords",function(){
  it("should work for some examples", function(){
    assert.strictEqual(reverseWords("hello world!"                 ),  "world! hello")
    assert.strictEqual(reverseWords("yoda doesn't speak like this" ),  "this like speak doesn't yoda")
    assert.strictEqual(reverseWords("foobar"                       ),  "foobar")
    assert.strictEqual(reverseWords("kata editor"                  ),  "editor kata")
    assert.strictEqual(reverseWords("row row row your boat"        ),  "boat your row row row")
    assert.strictEqual(reverseWords(""                             ),  "")
  });
});

// my code

function reverseWords(str){
    const splitString = str.split(' ')
    return splitString.reverse().join(' '); // reverse those words
  }