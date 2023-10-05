// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

using System;
using NUnit.Framework;

[TestFixture]
public class CountSheepsTests {

  [Test]
  public void SampleTest() {
    var sheeps = new bool[] { true, false, true };
    
    Assert.AreEqual(2, Kata.CountSheeps(sheeps));
  }
}

// my code

public static class Kata
{
  public static int CountSheeps(bool[] sheeps)
  {
    int count = 0;
    for (int i = 0; i < sheeps.Length;i++) {
      if (sheeps[i] == true) {count++;}
    }
    return count;
  }
}