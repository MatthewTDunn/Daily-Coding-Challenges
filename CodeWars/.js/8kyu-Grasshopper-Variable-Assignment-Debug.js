// Variable assignment
// Fix the variables assigments so that this code stores the string 'devLab' in the variable name.

describe('variable assignment', () => {
    it('should set variable a', () => {
      Test.assertEquals(a, 'dev')
    })
    it('should set variable b', () => {
      Test.assertEquals(b, 'Lab')
    })
    it('should set variable name', () => {
      Test.assertEquals(name, 'devLab')
    })
  })

// my code

var a = "dev"
var b = "Lab"

var name = a + b
