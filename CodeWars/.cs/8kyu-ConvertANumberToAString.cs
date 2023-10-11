// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

namespace Solution {
  using NUnit.Framework;
  using System;
  using System.Collections.Generic;

  [TestFixture]
  public class KataTests 
  {
    private static IEnumerable<TestCaseData> testCases
    {
      get
      {
        yield return new TestCaseData(67).Returns("67");
        yield return new TestCaseData(79585).Returns("79585");
        yield return new TestCaseData(1 + 2).Returns("3");
        yield return new TestCaseData(1 - 2).Returns("-1");
      }
    }
  
    [Test, TestCaseSource("testCases")]
    public string Test(int num) => Kata.NumberToString(num);
  }
}

// my code

using System;

public class Kata
{
  public static string NumberToString(int num) => num.ToString();
}