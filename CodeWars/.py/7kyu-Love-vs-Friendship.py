# If　a = 1, b = 2, c = 3 ... z = 26

# Then l + o + v + e = 54

# and f + r + i + e + n + d + s + h + i + p = 108

# So friendship is twice stronger than love :-)

# The input will always be in lowercase and never be empty.

# import codewars_test as test
# # for backward compatibility
# try:
#     from solution import WordsToMarks as words_to_marks
# except ImportError:
#     from solution import words_to_marks
    

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(words_to_marks('attitude'), 100)
        test.assert_equals(words_to_marks('friends'), 75)
        test.assert_equals(words_to_marks('family'), 66)
        test.assert_equals(words_to_marks('selfness'), 99)
        test.assert_equals(words_to_marks('knowledge'), 96)

# my code

# 
# @param:   string
# @return:  the cummulative result of the total characters assuming that each alphabetic 
#           character increases value by 1 in order from A-Z
# 

def words_to_marks(s):
    alphaMap = {
        'a' : 1,
        'b' : 2,
        'c' : 3,
        'd' : 4,
        'e' : 5,
        'f' : 6,
        'g' : 7,
        'h' : 8,
        'i' : 9,
        'j' : 10,
        'k' : 11,
        'l' : 12,
        'm' : 13,
        'n' : 14,
        'o' : 15,
        'p' : 16,
        'q' : 17,
        'r' : 18,
        's' : 19,
        't' : 20,
        'u' : 21,
        'v' : 22,
        'w' : 23,
        'x' : 24,
        'y' : 25,
        'z' : 26
    }
    #create variable to hold mapped results     
    alphaSum = 0
    #iterate over characters in string and associate mapped index result to alphaSum     
    for i in s:
        alphaSum = alphaSum+alphaMap.get(i)                
    return alphaSum
