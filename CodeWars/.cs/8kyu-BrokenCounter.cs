// Vasya Pupkin just started learning Java and C#. At first, he decided to write simple program that was supposed to sum up two small numbers (numbers and their sum fit in a byte), but it didn't work. Vasya was too sad to find out what is wrong. Help him to correct the mistake.

namespace Solution {
  using NUnit.Framework;
  using System;  

  [TestFixture]
  public class FirstClassTest 
  {
    [Test]
    public void testSum()
    {
       byte a = 1;
       byte b = 2;       
       Assert.AreEqual(3, FirstClass.sum(a, b));
    }
  }
}

public class FirstClass 
{
    public static int sum (int a, int b) 
    {
        int c = (a + b);
        return c;
    }
}