// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

using NUnit.Framework;

[TestFixture]
class Tests
{
    [TestCase(10, 5)]
    [TestCase(100, 40)]
    public void ATrueHero(int bullets, int dragons)
    {
        Assert.IsTrue(Kata.Hero(bullets, dragons));
    }

    [TestCase(4, 5)]
    [TestCase(1500, 751)]
    [TestCase(0, 1)]
    [TestCase(7, 4)]
    public void AFalseHero(int bullets, int dragons)
    {
        Assert.IsFalse(Kata.Hero(bullets, dragons));
    }
}

class Kata
{
    public static bool Hero(int bullets, int dragons) => ((bullets/2) >= dragons);
}