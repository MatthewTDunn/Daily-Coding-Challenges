// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

namespace Solution {
  using NUnit.Framework;
  using System;

  [TestFixture]
  public class SolutionTest
  {
    [Test]
    public void NoGoals()
    {
      Assert.AreEqual(Kata.GetGoals(0,0,0),0);
    }
    [Test]
    public void FiftyEightGoals()
    {
      Assert.AreEqual(Kata.GetGoals(43,10,5),58);
    }
  }
}

// my code

public class Kata
{
  public static int GetGoals(int laLigaGoals, int copaDelReyGoals, int championsLeagueGoals)
  {
    return laLigaGoals+copaDelReyGoals+championsLeagueGoals;
  }
}