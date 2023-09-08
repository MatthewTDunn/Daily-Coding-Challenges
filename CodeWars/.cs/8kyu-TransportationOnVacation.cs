// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

using System;
using NUnit.Framework;

[TestFixture]
public static class RentalCarTests 
{

    private static void testing(int actual, int expected) 
    {
        Assert.AreEqual(expected, actual);
    }
   
[Test]
    public static void test1() 
    {        
        testing(RentalCar.RentalCarCost(1),40);
        testing(RentalCar.RentalCarCost(3),100);
        testing(RentalCar.RentalCarCost(7),230);
    }
}

// code

public class RentalCar {
    public static int RentalCarCost(int d) => (d >= 7) ? (d * 40) - 50 : (d >= 3) ? (d * 40) - 20 : (d * 40); 
}