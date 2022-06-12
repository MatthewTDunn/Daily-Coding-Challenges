# Complete the function which returns the weekday according to the input number:

# 1 returns "Sunday"
# 2 returns "Monday"
# 3 returns "Tuesday"
# 4 returns "Wednesday"
# 5 returns "Thursday"
# 6 returns "Friday"
# 7 returns "Saturday"
# Otherwise returns "Wrong, please enter a number between 1 and 7"

import codewars_test as test
from solution import whatday

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(whatday(1), 'Sunday')
        test.assert_equals(whatday(2), 'Monday')
        test.assert_equals(whatday(3), 'Tuesday')
        test.assert_equals(whatday(8), 'Wrong, please enter a number between 1 and 7')
        test.assert_equals(whatday(20), 'Wrong, please enter a number between 1 and 7')

#  my code

def whatday(num):
    match num:
        case 1:
            return "Sunday"
        case 2:
            return "Monday"
        case 3:
            return "Tuesday"
        case 4:
            return "Wednesday"
        case 5:
            return "Thursday"
        case 6:
            return "Friday"
        case 7:
            return "Saturday"
        case _:
            return "Wrong, please enter a number between 1 and 7"