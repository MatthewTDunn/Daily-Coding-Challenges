// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

using NUnit.Framework;
using System;

[TestFixture]
public class Tests
{
  [Test]
  [TestCase(22, ExpectedResult="drink whisky")]
  public static string FixedTest(int old)
  {
    return Kata.PeopleWithAgeDrink(old);
  }
}

// my code

public class Kata
{
  public static string PeopleWithAgeDrink(int old) => (old >= 21) ? "drink whisky" : (old >= 18) ? "drink beer" : (old >= 14) ? "drink coke" : "drink toddy";
}