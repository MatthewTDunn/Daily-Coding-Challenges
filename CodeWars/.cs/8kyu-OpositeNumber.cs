// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

using NUnit.Framework;
    
    [TestFixture]
    public class MyTest
    {
        [Test]
        public void Test_1()
        {   
            Assert.AreEqual(-1, Kata.Opposite(1));
        }
    }

// my code

using System;

public class Kata
    {
        public  static int Opposite(int number) => -(number);
    }