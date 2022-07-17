# Your task is to write function factorial.

# https://en.wikipedia.org/wiki/Factorial

import codewars_test as test
from solution import factorial

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():

        tests = (
            (0, 1),
            (1, 1),
            (2, 2),
            (3, 6),
            (4, 24),
            (5, 120),
            (6, 720),
            (7, 5040),
        )
        
        for t in tests:
            inp, exp = t
            test.assert_equals(factorial(inp), exp)

# my code
# @param: integer value to apply factorial calculation to
# @return: factorial of input
#

def factorial(n):
    # establish sum variable
    sum=1
    # iterate through factorial figures from n to 0, multiplying each by each iteration
    for i in range(n,0,-1):
        sum = sum*i   
    return sum