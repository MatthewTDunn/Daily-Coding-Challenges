// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example(Input --> Output):

// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

using System.Collections.Generic;
using System.Linq;
using NUnit.Framework;
using System;

[TestFixture]
public class Tests
{
  public static object[] FixedTests = 
  {
    new object[] { MonkeyCounter.MonkeyCount(5), new int[]{1,2,3,4,5} },
    new object[] { MonkeyCounter.MonkeyCount(3), new int[]{1,2,3} },
    new object[] { MonkeyCounter.MonkeyCount(9), new int[]{1,2,3,4,5,6,7,8,9} },
    new object[] { MonkeyCounter.MonkeyCount(10), new int[]{1,2,3,4,5,6,7,8,9,10} },
    new object[] { MonkeyCounter.MonkeyCount(20), new int[]{1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20} }
  };
  
  [Test, TestCaseSource("FixedTests")]
  public void FixedTest(int[] r, int[] e)
  {
    Apesert.AreEqual(e, r);
  }
}

public static class Apesert
{
  public static void AreEqual(int[] a, int[] b)
  {
    Assert.AreEqual("["+String.Join(", ",a)+"]", 
                    "["+String.Join(", ",b)+"]", 
                    "Array did not match expected.");
  }
}

// my code

public static class MonkeyCounter
{
  public static int[] MonkeyCount(int n)
  {
    int[] monkey = new int[n];
    for (int i = 1; i < n + 1; i++)
    {
      monkey[i-1] = i;  
    }
    return monkey;
  }
}