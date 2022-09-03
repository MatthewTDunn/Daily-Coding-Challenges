# You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

# You can assume all values in the array are numbers.


import codewars_test as test
from solution import small_enough

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():

        tests = (
            ([[66, 101] ,200], True),
            ([[78, 117, 110, 99, 104, 117, 107, 115] ,100], False),
            ([[101, 45, 75, 105, 99, 107], 107], True),
            ([[80, 117, 115, 104, 45, 85, 112, 115] ,120], True),
            ([[1, 1, 1, 1, 1, 2] ,1], False),
            ([[78, 33, 22, 44, 88, 9, 6] ,87], False),
            ([[1, 2, 3, 4, 5, 6, 7, 8, 9] ,10], True),
            ([[12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12] ,12], True),
        )
        
        for inp, exp in tests:
            test.assert_equals(small_enough(*inp), exp)


# my code

# 
# @param: list
# @return: boolean if all list items are less than limit
# 

def small_enough(array, limit):
    for i in array:
        print(i)
        if i > limit:
            return False
    return True
