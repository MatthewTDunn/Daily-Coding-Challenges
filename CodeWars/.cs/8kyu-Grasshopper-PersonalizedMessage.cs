// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

namespace Solution 
{
  using NUnit.Framework;
  using System;

  [TestFixture]
  public class SolutionTest
  {
    [Test]
    public void MyTest()
    {
      Assert.AreEqual("Hello boss", Kata.Greet("Daniel", "Daniel"));
      Assert.AreEqual("Hello guest", Kata.Greet("Greg", "Daniel"));
    }
  }
}

// my code

public class Kata
{
  public static string Greet(string name, string owner) => (name == owner) ? "Hello boss" : "Hello guest";
}