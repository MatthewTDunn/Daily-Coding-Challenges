// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(bmi(80, 1.80), "Normal");
    });
  });

  //my code

  function bmi(weight, height) {
    return (weight/(height*height) > 30) ? 'Obese' : (weight/(height*height) > 25) ? 'Overweight' : (weight/(height*height) > 18.5) ? 'Normal' : 'Underweight'
  }
