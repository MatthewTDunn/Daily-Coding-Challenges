# Create a function that takes a string and an integer (n).

# The function should return a string that repeats the input string n number of times.

# If anything other than a string is passed in you should return "Not a string"

# Example
# "Hi", 2 --> "HiHi"
# 1234, 5 --> "Not a string"

import codewars_test as test
from solution import repeat_it

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(repeat_it("*", 3), "***")
        test.assert_equals(repeat_it("Hello", 5), "HelloHelloHelloHelloHello")

# my code

def repeat_it(string,n):
    repeat = 1
    tempString = string
    if type(string) == str:
        if n>0:
            while repeat < n:
                string = string + tempString
                repeat = repeat + 1
            return string    
        else:
            return ""
    else:
        return "Not a string"
        
