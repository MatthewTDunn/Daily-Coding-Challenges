// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or -1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.

describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(calculateTip(20, "Excellent"), 4);
  Test.assertEquals(calculateTip(26.95, "good"), 3);
  
    });
  });

  
//   my code

function calculateTip(amount, rating) {
    return (rating.toLowerCase() === "excellent") ? Math.ceil(amount * 0.2) : (rating.toLowerCase() === "great") ? Math.ceil(amount * 0.15) : (rating.toLowerCase() === "good") ? Math.ceil(amount * 0.10) : (rating.toLowerCase() === "poor") ? Math.ceil(amount * 0.05) : (rating.toLowerCase() === "terrible") ? 0 : "Rating not recognised"
}