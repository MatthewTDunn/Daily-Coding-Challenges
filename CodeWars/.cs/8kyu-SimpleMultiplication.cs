// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

namespace Solution 
{
  using NUnit.Framework;

  [TestFixture]
  public class SolutionTest
  {
    [Test]
    public void BasicTests()
    {
      Assert.AreEqual(9, Multiplier.Multiply(1),"Should return given argument times nine");
      Assert.AreEqual(16, Multiplier.Multiply(2), "Should return given argument times eight");
      Assert.AreEqual(64, Multiplier.Multiply(8), "Should return given argument times eight");
      Assert.AreEqual(32, Multiplier.Multiply(4), "Should return given argument times eight");
      Assert.AreEqual(45, Multiplier.Multiply(5), "Should return given argument times nine");
    }
  }
}

// my code

public class Multiplier
{
  public static int Multiply(int x) 
  {
    return (x % 2 == 0) ? x * 8 : x * 9;
  }
}  