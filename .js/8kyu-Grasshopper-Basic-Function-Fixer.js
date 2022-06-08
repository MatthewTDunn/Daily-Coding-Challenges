// Fix the function
// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

// Can you help me fix the function?

describe('fix add five', () => {
    it('fixed tests', () => {
      Test.assertEquals(addFive(5), 10)
      Test.assertEquals(addFive(0), 5)
      Test.assertEquals(addFive(-5), 0)
    })
  })

  // my code

  function addFive(num) {
    return num+5
    }