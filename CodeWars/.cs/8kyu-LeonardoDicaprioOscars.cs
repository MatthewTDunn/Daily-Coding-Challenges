// You have to write a function that describe Leo:

// def leo(oscar):
//   pass
// if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
// if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
// if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
// if it was over 88 you should return "Leo got one already!"

using NUnit.Framework;

[TestFixture]
public class Tests
{
  [Test]
  [TestCase(88, ExpectedResult = "Leo finally won the oscar! Leo is happy")]
  public string LeoTest(int oscar)
  {
    return Kata.Leo(oscar);
  }
}

// my code

public static class Kata
{
  public static string Leo(int oscar) => (oscar == 88) ? "Leo finally won the oscar! Leo is happy" 
    : (oscar == 86) ? "Not even for Wolf of wallstreet?!" 
    : (oscar < 88) ? "When will you give Leo an Oscar?" 
    : "Leo got one already!";
}