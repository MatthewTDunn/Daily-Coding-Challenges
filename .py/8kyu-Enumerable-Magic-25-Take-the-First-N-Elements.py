# Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

# If you need help, here's a reference:

# https://docs.python.org/3/library/stdtypes.html#sequence-types-list-tuple-range


import codewars_test as test
from solution import take

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2], "should return the first 3 items")

#  my code

# 
# @param: list
# @return: sliced list consisting of n elements from index 0
# 
def take(arr,n):
    return arr[0:n]