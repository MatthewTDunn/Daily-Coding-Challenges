// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

namespace Solution {
  using NUnit.Framework;
  using System;

  [TestFixture]
  public class SolutionTest
  {
    [Test]
    public void SampleTests() {
      Assert.AreEqual(60, Kata.GetVolumeOfCuboid(2,5,6), 0.00001, "Length: 2, Width: 5, Height: 6");
      Assert.AreEqual(94.5, Kata.GetVolumeOfCuboid(6.3,3,5), 0.00001, "Length: 6.3, Width: 3, Height: 5");
    }
  }
}

// my code

public class Kata {
  public static double GetVolumeOfCuboid(double length, double width, double height) => length * width * height;
}