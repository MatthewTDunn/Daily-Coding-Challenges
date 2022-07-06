# Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

# For example:

# solution([1,2,3,10,5]) # should return [1,2,3,5,10]
# solution(None) # should return []

import codewars_test as test
from solution import solution

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(solution([1,2,3,10,5]), [1,2,3,5,10])
        test.assert_equals(solution(None), [])
        test.assert_equals(solution([]), [])
        test.assert_equals(solution([20,2,10]), [2,10,20])
        test.assert_equals(solution([2,20,10]), [2,10,20])

#  my code

# 
# @params: list
# @return: sorted list
# 

def solution(nums):
    #statement to handle 'None' input as shorthand does not work below     
    if nums == None:
        return []
    #as above, if empty list is given, return empty list else sort the list and return     
    [] if (nums == None or nums == []) else nums.sort()
    return nums