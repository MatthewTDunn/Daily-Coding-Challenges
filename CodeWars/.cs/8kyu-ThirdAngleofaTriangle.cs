// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

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
      Assert.That(Kata.OtherAngle(30, 60), Is.EqualTo(90));
      Assert.That(Kata.OtherAngle(60, 60), Is.EqualTo(60));
      Assert.That(Kata.OtherAngle(43, 78), Is.EqualTo(59));
      Assert.That(Kata.OtherAngle(10, 20), Is.EqualTo(150));
    }
  }
}

// my code

using System;

public static class Kata
{
  public static int OtherAngle(int a, int b) => (180 - a - b);
}