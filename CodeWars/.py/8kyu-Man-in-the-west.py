# A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.

# So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.

# import codewars_test as test
# from solution import *

@test.describe("Sample tests")
def tests():
    @test.it("Some examples")
    def tests():
        test.assert_equals(check_the_bucket(['stone', 'stone', 'gold', 'stone', 'stone',]), True, 'I will bye a teeth')
        test.assert_equals(check_the_bucket(['stone', 'stone', 'stone', 'stone', 'stone',]), False, 'Not today')
        test.assert_equals(check_the_bucket(['gold', 'gold', 'gold', 'gold', 'gold',]), True, 'I will bye a teeth')

# my code

def check_the_bucket(bucket):
    return 'gold' in bucket 
