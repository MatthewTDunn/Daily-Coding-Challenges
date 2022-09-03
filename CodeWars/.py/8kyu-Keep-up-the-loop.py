# Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

# Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

# If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
# If he doesn't get 10 hoops, return the string "Keep at it until you get it".

import codewars_test as test

try:
    from solution import hoopCount as hoop_count
except ImportError:
    from solution import hoop_count

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(hoop_count(3),"Keep at it until you get it" ) 
        test.assert_equals(hoop_count(11),"Great, now move on to tricks" )

    #  my code

def hoop_count(n):
    if n>=10:
        return "Great, now move on to tricks"
    else: return "Keep at it until you get it"
