# This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

# Add the value "codewars" to the array websites/Websites 1,000 times.

import codewars_test as test
from solution import websites

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(len(websites), 1000)
        test.assert_equals(type(websites), list)
        test.assert_equals(list(set(websites)), ["codewars"])

# my code

# 
# @param: NULL
# @return: List of codewars, iterated a thousand times
# 

websites = []
for i in range(1000):
    websites.append('codewars')