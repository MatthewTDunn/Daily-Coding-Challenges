// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

namespace Solution 
{
  using NUnit.Framework;
  using System;
  using System.Linq;

  [TestFixture]
  public class SolutionTest
  {
    [Test]
    public void SampleTest()
    {
      Assert.AreEqual("hello", Kata.Smash(new string[] {"hello"}));
      Assert.AreEqual("hello world", Kata.Smash(new string[] {"hello", "world"}));
      Assert.AreEqual("hello amazing world", Kata.Smash(new string[] {"hello", "amazing", "world"}));
      Assert.AreEqual("this is a really long sentence", Kata.Smash(new string[] {"this", "is", "a", "really", "long", "sentence"}));
      Assert.AreEqual("", Kata.Smash(new string[] {""}));
    }
  }
}

// my code

public class Kata
{
  public static string Smash(string[] words) => string.Join(" ", words);
}