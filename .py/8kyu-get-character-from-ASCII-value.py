# Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

# Example:

# get_char(65)
# should return:

# 'A'
# For ASCII table, you can refer to http://www.asciitable.com/


test.assert_equals(get_char(65),'A')

# my code

# 
# @param: number
# @return: ASCII character relative to param
#

def get_char(c):
    return chr(c)