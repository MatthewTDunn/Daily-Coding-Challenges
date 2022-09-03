// Unfinished Loop - Bug Fixing #1
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

describe("Fix Timmys Counter", function() {
    it("Fixed Tests", function() {
      Test.assertSimilar(createArray(1),[1]);
      Test.assertSimilar(createArray(2),[1,2]);
      Test.assertSimilar(createArray(3),[1,2,3]);
      Test.assertSimilar(createArray(4),[1,2,3,4]);
      Test.assertSimilar(createArray(5),[1,2,3,4,5]);
    });
  });

// my code

function createArray(number){
    var newArray = [];
    // added the counter ++ increment to solve this bug
    for(var counter = 1; counter <= number;counter++){
      newArray.push(counter);
    }
    
    return newArray;
  }
