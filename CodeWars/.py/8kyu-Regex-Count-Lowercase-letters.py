# Your task is simply to count the total number of lowercase letters in a string.

# Examples
# lowercaseCount("abc"); ===> 3

# lowercaseCount("abcABC123"); ===> 3

# lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

# lowercaseCount(""); ===> 0;

# lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

# lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26

import codewars_test as test
from solution import lowercase_count

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(lowercase_count("abc"), 3)
        test.assert_equals(lowercase_count("abcABC123"), 3)
        test.assert_equals(lowercase_count("abcABC123!@#$%^&*()_-+=}{[]|\':;?/>.<,~"), 3)
        test.assert_equals(lowercase_count(""), 0)
        test.assert_equals(lowercase_count("ABC123!@#$%^&*()_-+=}{[]|\':;?/>.<,~"), 0)
        test.assert_equals(lowercase_count("abcdefghijklmnopqrstuvwxyz"), 26)

#  my code

# 
# @param: string
# @return: count of lowercase letters
# 

def lowercase_count(strng):
    import re
    lowercase_characters = re.findall(r"[a-z]", strng)
    return len(lowercase_characters)
