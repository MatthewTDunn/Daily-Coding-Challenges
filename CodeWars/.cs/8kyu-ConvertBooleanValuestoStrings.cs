// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

using System;
using NUnit.Framework;

[TestFixture]
public class  boolToWordTest {

  [Test]
  public void boolToWordReturned1() {
    Assert.AreEqual("Yes", Kata.boolToWord(true));
    Console.WriteLine("Expected Yes");
  }

  [Test]
  public void boolToWordReturned2() {
    Assert.AreEqual("No", Kata.boolToWord(false));
    Console.WriteLine("Expected No");
  }

  [Test]
  public void boolToWordReturned3() {
    Assert.AreEqual("Yes", Kata.boolToWord(true));
    Console.WriteLine("Expected Yes");
  }
}

// my code

public static class Kata
{
  public static string boolToWord(bool word) => (word) ? "Yes" : "No";
}