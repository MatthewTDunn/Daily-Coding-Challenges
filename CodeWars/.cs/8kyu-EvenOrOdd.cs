// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

using System;
using NUnit.Framework;

namespace Solution
{
  [TestFixture]
  public class SolutionTest
  {
    [Test]
    public void ExampleTest()
    {
      Assert.AreEqual("Even", SolutionClass.EvenOrOdd(2));
      Assert.AreEqual("Odd", SolutionClass.EvenOrOdd(1));
      Assert.AreEqual("Even", SolutionClass.EvenOrOdd(0));
      Assert.AreEqual("Odd", SolutionClass.EvenOrOdd(7));
      Assert.AreEqual("Odd", SolutionClass.EvenOrOdd(-1));
    }
  }
}

// my code

namespace Solution
{
  public class SolutionClass
  {
    public static string EvenOrOdd(int number) => (number % 2 == 0) ? "Even" : "Odd";
  }
}