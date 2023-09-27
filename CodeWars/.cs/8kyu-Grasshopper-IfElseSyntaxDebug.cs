// If/else syntax debug
// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

// checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

namespace Solution 
{
  using NUnit.Framework;
  using System;

  [TestFixture]
  public class SolutionTest
  {
    [Test, Description("Should return the proper result with fixed tests")]
    public void FixedTest()
    {
      Player greg = new Player();
      greg.Health = 5;
      Assert.AreEqual(true, greg.CheckAlive());
      
      Player joe = new Player();
      joe.Health = 0;
      Assert.AreEqual(false, joe.CheckAlive());
    }
  }
}

// my code

public class Player
{
  private int health = 100;
  public int Health
  {
    get
    {
      return this.health;
    }
    set
    {
      health = value;
    }
  }
  
  //FIXME: This method won't compile for some reason! :(
  public bool CheckAlive() => (this.health > 0);
}