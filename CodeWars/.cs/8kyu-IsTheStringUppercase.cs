// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

using NUnit.Framework;
using System;

public class Tests
{
  [Test]
  [TestCase("c", ExpectedResult=false)]
  [TestCase("C", ExpectedResult=true)]
  [TestCase("hello I AM DONALD", ExpectedResult=false)]
  [TestCase("HELLO I AM DONALD", ExpectedResult=true)]
  [TestCase("ACSKLDFJSgSKLDFJSKLDFJ", ExpectedResult=false)]
  [TestCase("ACSKLDFJSGSKLDFJSKLDFJ", ExpectedResult=true)]
  public static bool FixedTest(string text)
  {
    return text.IsUpperCase();
  }
}

// my code

public static class StringExtensions
{
  public static bool IsUpperCase(this string text) => text == text.ToUpper();
}