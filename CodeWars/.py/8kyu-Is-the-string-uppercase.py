# Is the string uppercase?
# Task
# Create a method to see whether the string is ALL CAPS.

# Examples (input -> output)
# "c" -> False
# "C" -> True
# "hello I AM DONALD" -> False
# "HELLO I AM DONALD" -> True
# "ACSKLDFJSgSKLDFJSKLDFJ" -> False
# "ACSKLDFJSGSKLDFJSKLDFJ" -> True
# In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

def gen_test_case(inp, res):
    test.assert_equals(is_uppercase(inp), res, inp)

test.describe("Basic Tests")

gen_test_case("c", False)
gen_test_case("C", True)
gen_test_case("hello I AM DONALD", False)
gen_test_case("HELLO I AM DONALD", True)
gen_test_case("$%&", True)

# my code

# 
# @param: string
# @return: boolean - if argument string is all uppercase or not
# 
def is_uppercase(inp):
    return inp==inp.upper()
