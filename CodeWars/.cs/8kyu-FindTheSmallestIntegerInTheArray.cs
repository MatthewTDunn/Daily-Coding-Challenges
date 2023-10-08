// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// using NUnit.Framework;

[TestFixture]
public class Tests
{
    [Test]
    [TestCase(new int[]{78,56,232,12,11,43}, ExpectedResult=11)]
    [TestCase(new int[]{78,56,-2,12,8,-33}, ExpectedResult=-33)]
    public static int FixedTest(int[] args)
    {
        return Kata.FindSmallestInt(args);
    }
}

// my code

using System;
using System.Linq;
public class Kata 
{
    public static int FindSmallestInt(int[] args) => args.Min();
}