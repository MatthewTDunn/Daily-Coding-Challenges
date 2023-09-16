// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!

namespace Solution {
  using NUnit.Framework;
  using System;

  [TestFixture]
  public class SolutionTest
  {
    [Test, Description("Edge tests")]
    public void EdgeTests()
    {
      Assert.AreEqual("even", Kata.OddOrEven(new int[] {0}));
      Assert.AreEqual("odd", Kata.OddOrEven(new int[] {1}));
      Assert.AreEqual("even", Kata.OddOrEven(new int[] {}));
    }
    
    [Test, Description("Even tests")]
    public void EvenTests()
    {
      Assert.AreEqual("even", Kata.OddOrEven(new int[] {0, 1, 5}));
      Assert.AreEqual("even", Kata.OddOrEven(new int[] {0, 1, 3}));
      Assert.AreEqual("even", Kata.OddOrEven(new int[] {1023, 1, 2}));
    }
    
    [Test, Description("Negative Even tests")]
    public void NegativeEvenTests()
    {
      Assert.AreEqual("even", Kata.OddOrEven(new int[] {0, -1, -5}));
      Assert.AreEqual("even", Kata.OddOrEven(new int[] {0, -1, -3}));
      Assert.AreEqual("even", Kata.OddOrEven(new int[] {-1023, 1, -2}));
    }
    
    [Test, Description("Odd tests")]
    public void OddTests()
    {
      Assert.AreEqual("odd", Kata.OddOrEven(new int[] {0, 1, 2}));
      Assert.AreEqual("odd", Kata.OddOrEven(new int[] {0, 1, 4}));
      Assert.AreEqual("odd", Kata.OddOrEven(new int[] {1023, 1, 3}));
    }
      
    [Test, Description("Negative Odd tests")]
    public void NegativeOddTests()
    {
      Assert.AreEqual("odd", Kata.OddOrEven(new int[] {0, -1, 2}));
      Assert.AreEqual("odd", Kata.OddOrEven(new int[] {0, 1, -4}));
      Assert.AreEqual("odd", Kata.OddOrEven(new int[] {-1023, -1, 3}));
    }
  }
}

// my code

using System.Linq;
public class Kata
{
  public static string OddOrEven(int[] array) => (array.Sum() % 2 == 0) ? "even" : "odd";
}