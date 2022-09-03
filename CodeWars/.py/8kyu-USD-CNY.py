# Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

# Examples (Input -> Output)
# 15  -> '101.25 Chinese Yuan'
# 465 -> '3138.75 Chinese Yuan'
# The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")


import codewars_test as test
from solution import usdcny

@test.describe("USD=>CNY")
def test_group():
    @test.it("Basic test case")
    def test_case():
        test.assert_equals(usdcny(15), "101.25 Chinese Yuan")
        test.assert_equals(usdcny(465), "3138.75 Chinese Yuan")

#  my code

# 
# @param: USD value
# @return: the CNY currency pair value against USD
# 

def usdcny(usd):
    return "{:.2f} Chinese Yuan".format(usd*6.75)
