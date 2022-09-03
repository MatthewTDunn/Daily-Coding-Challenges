# Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

# Example:    
# 5.5589 is rounded 5.56   
# 3.3424 is rounded 3.34

import codewars_test as test
from solution import two_decimal_places

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(two_decimal_places(4.659725356), 4.66, "didn't work for 4.659725356")
        test.assert_equals(two_decimal_places(173735326.3783732637948948), 173735326.38, "didn't work for 173735326.3783732637948948")
        test.assert_equals(two_decimal_places(4.653725356), 4.65, "didn't work for 4.653725356")

#  my code

def two_decimal_places(n):
    return round(n,2)
