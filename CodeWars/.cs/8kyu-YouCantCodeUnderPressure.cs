// Code as fast as you can! You need to double the integer and return it.

using NUnit.Framework;
using System;
using System.Collections.Generic;

namespace Solution
{
  [TestFixture]
  public class CodeWarsTest
  {
    private static IEnumerable<TestCaseData> testCases
    {
      get
      {
        yield return new TestCaseData(2).Returns(4);
        yield return new TestCaseData(4).Returns(8);
        yield return new TestCaseData(-10).Returns(-20);
        yield return new TestCaseData(0).Returns(0);
        yield return new TestCaseData(100).Returns(200);
      }
    }
  
  	[Test, TestCaseSource("testCases")]
    public int Test(int n) => Kata.DoubleInteger(n);
  }
}

// my code

using System;

public static class Kata
{
  public static int DoubleInteger(int n) => 2 * n;
}
    