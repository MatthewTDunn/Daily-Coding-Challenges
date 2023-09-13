// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

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
      Assert.AreEqual("One", Kata.SwitchItUp(1));
      Assert.AreEqual("Three", Kata.SwitchItUp(3));
      Assert.AreEqual("Five", Kata.SwitchItUp(5));
    }
  }
}

// my code

public class Kata
{
  public static string SwitchItUp(int number)
  {
    string returnString = "";
    switch (number)
    {
      case 1:
        returnString = "One";
        break;
      case 2:
        returnString = "Two";
        break;
      case 3:
        returnString = "Three";
        break;
      case 4:
        returnString = "Four";
        break;
      case 5:
        returnString = "Five";
        break;
      case 6:
        returnString = "Six";
        break;
      case 7:
        returnString = "Seven";
        break;
      case 8:
        returnString = "Eight";
        break;
      case 9:
        returnString = "Nine";
        break;
      case 0:
        returnString = "Zero";
        break;
    }
    return returnString;
  }
}