// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

namespace Solution 
{
  using NUnit.Framework;
  using System;

  [TestFixture]
  public class SolutionTest
  {
    [Test]
    public void SampleTest()
    {
      Assert.That(Kata.ReverseSeq(5), Is.EqualTo(new int[] {5,4,3,2,1}));
    }
  }
}

// my code

using System.Collections.Generic;

public static class Kata
{
  public static int[] ReverseSeq(int n)
  {
    int[] returnArray = new int[n];
    for (int i = 0; i < n; i++)
    {
      returnArray[i] = n-i;
    }
    return returnArray;
  }
}