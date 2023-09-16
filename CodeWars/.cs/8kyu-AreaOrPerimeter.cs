// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

namespace AreaOrPerimter {
  using NUnit.Framework;
  using System;
  [TestFixture]
  public class Test
  {
    [Test]
    public void FixedTest()
    {
      Assert.AreEqual(MathCheck.AreaOrPerimeter(4, 4), 16);
      Assert.AreEqual(MathCheck.AreaOrPerimeter(6, 10), 32);
    }
  }
}

// my code

public class MathCheck {
    public static int AreaOrPerimeter(int l, int w) => (l != w ) ? 2*(l + w) : w * w;
}