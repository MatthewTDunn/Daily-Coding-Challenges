// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.

using System;
using NUnit.Framework;

[TestFixture]
public class Tests
{
  [Test]
  [TestCase(10,2,true)]
  [TestCase(63,7,true)]
  [TestCase(2450,5,true)]
  [TestCase(24612,3,true)]
  [TestCase(9,2,false)]
  [TestCase(653,7,false)]
  [TestCase(2453,5,false)]
  [TestCase(24617,3,false)]
  public static void FixedTest(int num, int factor, bool isFactor)
  {
    Assert.AreEqual(isFactor, Kata.CheckForFactor(num, factor));
  }
}

// my code

public class Kata
{
  public static bool CheckForFactor(int num, int factor) => (num % factor == 0);
}