// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

namespace Solution 
{
  using NUnit.Framework;
  using System;  

  [TestFixture]
  public class KataTests
  {
    [Test]
    public void BasicTests()
    {
      Assert.AreEqual(3, Kata.FindShort("bitcoin take over the world maybe who knows perhaps"));
      Assert.AreEqual(3, Kata.FindShort("turns out random test cases are easier than writing out basic ones"));      
      Assert.AreEqual(2, Kata.FindShort("Let's travel abroad shall we"));
    }
  }
}

// my code

public class Kata
{
  public static int FindShort(string s)
  {
    string[] splitString = s.Split(" ");
    int stringLength = s.Length;
    foreach (var individualWords in splitString)
    {
      stringLength = (individualWords.Length < stringLength) ? individualWords.Length : stringLength; 
    }
    return stringLength;
  }
}