# Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

# to_binary(1)  # should return 1 
# to_binary(5)  # should return 101
# to_binary(11) # should return 1011

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(to_binary(1), 1)
        test.assert_equals(to_binary(2), 10)
        test.assert_equals(to_binary(3), 11)
        test.assert_equals(to_binary(5), 101)

# my code

def to_binary(n):
    return int(format(n,"b"));
