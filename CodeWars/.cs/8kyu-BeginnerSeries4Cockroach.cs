// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

using NUnit.Framework;
  using System;
  
  [TestFixture]
  public class CockTest1
  {
    [Test]
    public void Test1()
    {
     Assert.AreEqual(30, Cockroach.CockroachSpeed(1.08));   
     Assert.AreEqual(30, Cockroach.CockroachSpeed(1.09)); 
     Assert.AreEqual(0, Cockroach.CockroachSpeed(0));
    }    

  }
// my code

  using System;
  public class Cockroach
  {
    public static int CockroachSpeed(double x) => (int)Math.Floor(x*27.7778);
  }
