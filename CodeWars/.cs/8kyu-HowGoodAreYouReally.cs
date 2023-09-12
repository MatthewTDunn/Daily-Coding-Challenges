// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

using System;
using System.Linq;
using NUnit.Framework;

[TestFixture]
public class Tests
{
  [Test]
  [TestCase(new int[]{2,3}, 5, ExpectedResult=true)]
  [TestCase(new int[]{100, 40, 34, 57, 29, 72, 57, 88}, 75, ExpectedResult=true)]
  [TestCase(new int[]{12,23,34,45,56,67,78,89,90}, 69, ExpectedResult=true)]
  public static bool FixedTest(int[] arr, int num)
  {
    return Kata.BetterThanAverage(arr, num);
  }
}

// my code

public class Kata
{
  public static bool BetterThanAverage(int[] ClassPoints, int YourPoints) => ((ClassPoints.Sum()+YourPoints) / ClassPoints.Length <= YourPoints);
}