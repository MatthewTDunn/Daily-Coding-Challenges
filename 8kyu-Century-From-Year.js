// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20


describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(century(1705), 18, 'Testing for year 1705');
  Test.assertEquals(century(1900), 19, 'Testing for year 1900');
  Test.assertEquals(century(1601), 17, 'Testing for year 1601');
  Test.assertEquals(century(2000), 20, 'Testing for year 2000');
  Test.assertEquals(century(89), 1, 'Testing for year 89');
    });
  });

  // my code

  function century(year) {
    return (year%100 == 0) ? Math.floor(year/100) : (Math.floor((year/100)+1))
  }