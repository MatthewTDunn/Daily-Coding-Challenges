// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

using NUnit.Framework;
using System;

[TestFixture]
public class Tests
{
    [TestCase("green", "yellow")]
    [TestCase("yellow", "red")]
    [TestCase("red", "green")]
    public void BasicTests(string s, string expected)
    {
        Assert.That(Kata.UpdateLight(s), Is.EqualTo(expected));
    }
}

public class Kata
{
    public static string UpdateLight(string current) => (current == "green") ? "yellow" : (current == "red") ? "green" : "red";
}