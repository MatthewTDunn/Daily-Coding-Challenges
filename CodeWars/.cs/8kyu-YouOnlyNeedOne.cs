// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

namespace Solution 
{
  using NUnit.Framework;
  using System;

  [TestFixture]
  public class KataTests
  {
    [Test]
    public void BasicTests()
    {
      Assert.AreEqual(true, Kata.Check(new object[] { 66, 101 }, 66));
      Assert.AreEqual(true, Kata.Check(new object[] { 80, 117, 115, 104, 45, 85, 112, 115 }, 45));
      
      Assert.AreEqual(true, Kata.Check(new object[] { 't', 'e', 's', 't' }, 'e'));
      Assert.AreEqual(false, Kata.Check(new object[] { "what", "a", "great", "kata" }, "kat"));      
    }
  }
}

// my code

using System.Linq;

public class Kata
{
  public static bool Check(object[] a, object x) => a.Contains(x);
}