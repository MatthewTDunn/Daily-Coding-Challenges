# Complete the function which converts a binary number (given as a string) to a decimal number.

test.assert_equals(bin_to_decimal("0"), 0)
test.assert_equals(bin_to_decimal("1"), 1)
test.assert_equals(bin_to_decimal("10"), 2)
test.assert_equals(bin_to_decimal("11"), 3)
test.assert_equals(bin_to_decimal("101010"), 42)
test.assert_equals(bin_to_decimal("1001001"), 73)

# my code

# 
# @param: binary string
# @return: integer equivalent of argument string
# 

def bin_to_decimal(inp):
    return int(inp,2)
