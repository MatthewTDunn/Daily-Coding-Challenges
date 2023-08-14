// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// ['John', 'Smith'], 'Phoenix', 'Arizona'
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

using System;

namespace Solution {
  using NUnit.Framework;
  using System;

  [TestFixture]
  public class SolutionTest
  {
    [Test]
    public void SampleTest()
    {
      Assert.AreEqual("Hello, John Smith! Welcome to Phoenix, Arizona!", Kata.SayHello(new string[] {"John", "Smith"}, "Phoenix", "Arizona"));
    }
  }
}

// my code

public class Kata
{
  public static string SayHello(string[] name, string city, string state)
  {
    string fullName = string.Join(' ', name);
    return $"Hello, {fullName}! Welcome to {city}, {state}!";    
  }
}