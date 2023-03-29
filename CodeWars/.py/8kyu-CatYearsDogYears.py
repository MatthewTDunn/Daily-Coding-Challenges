# Kata Task
# I have a cat and a dog.

# I got them at the same time as kitten/puppy. That was humanYears years ago.

# Return their respective ages now as [humanYears,catYears,dogYears]

# NOTES:

# humanYears >= 1
# humanYears are whole numbers only
# Cat Years
# 15 cat years for first year
# +9 cat years for second year
# +4 cat years for each year after that
# Dog Years
# 15 dog years for first year
# +9 dog years for second year
# +5 dog years for each year after that

import codewars_test as test
from solution import human_years_cat_years_dog_years

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("one")
    def _():
        test.assert_equals(human_years_cat_years_dog_years(1), [1,15,15])
    @test.it("two")
    def _():
        test.assert_equals(human_years_cat_years_dog_years(2), [2,24,24])
    @test.it("ten")
    def _():
        test.assert_equals(human_years_cat_years_dog_years(10), [10,56,64])

def human_years_cat_years_dog_years(human_years):
    catYears = 0
    dogYears = 0
    for i in range(0,human_years):
        if i == 0:
            catYears += 15
            dogYears += 15
        elif i == 1:
            catYears += 9
            dogYears += 9
        else:
            catYears += 4
            dogYears += 5
            
    return [human_years,catYears,dogYears]