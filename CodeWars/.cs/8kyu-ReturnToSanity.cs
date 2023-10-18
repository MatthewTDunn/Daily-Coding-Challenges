// This function should return an object, but it's not doing what's intended. What's wrong?

namespace Solution_Test {
  using NUnit.Framework;
  using System;
  using System.Collections.Generic;
  [TestFixture]
  public class Return_To_Sanity
  {
    [Test]
    public void Is_It_Sane(){
      var sanity = new Dictionary<string,string>{{"sanity","hello"}};
      Assert.AreEqual(Kata.Mystery(), sanity, "Mystery has not returned to sanity.");
    }
  }
}

// my code

using System.Collections.Generic;
public class Kata
{
    public static Dictionary<string,string> Mystery()
    {
      Dictionary<string,string> results = new Dictionary<string, string>();
      results.Add("sanity","hello");
      return results;
        
    }
}