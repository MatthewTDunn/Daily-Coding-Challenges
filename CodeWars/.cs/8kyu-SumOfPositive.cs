// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

using NUnit.Framework;
using System;

[TestFixture]
public class Tests
{
  [Test]
  [TestCase(new int[]{1, 2, 3, 4, 5}, ExpectedResult=15)]
  [TestCase(new int[]{1, -2, 3, 4, 5}, ExpectedResult=13)]
  [TestCase(new int[]{-1, 2, 3, 4, -5}, ExpectedResult=9)]
  [TestCase(new int[]{}, ExpectedResult=0)]
  [TestCase(new int[]{-1, -2, -3, -4, -5}, ExpectedResult=0)]
  public static int ExampleTest(int[] arr)
  {
    return Kata.PositiveSum(arr);
  }
}

// my code

public class Kata
{
  public static int PositiveSum(int[] arr)
  {
    int arrPositiveSum = 0;
    for (int i = 0; i < arr.Length; i++)
    {
      if (arr[i] > 0) {arrPositiveSum += arr[i];}  
    }
    return arrPositiveSum;
  }
}
