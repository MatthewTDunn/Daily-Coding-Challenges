// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15

using System;
using NUnit.Framework;

[TestFixture]
public class Tests
{
	[Test]
	public void Test1()
  {
  	Assert.That(Game.Move(0,4), Is.EqualTo(8));
  }
}

// my code;

public class Game
{
  public static int Move(int position, int roll) => position + (roll * 2);
}