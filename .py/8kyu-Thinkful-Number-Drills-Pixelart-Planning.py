# You're laying out a rad pixel art mural to paint on your living room wall in homage to Paul Robertson, your favorite pixel artist.

# You want your work to be perfect down to the millimeter. You haven't decided on the dimensions of your piece, how large you want your pixels to be, or which wall you want to use. You just know that you want to fit an exact number of pixels.

# To help decide those things you've decided to write a function, is_divisible() that will tell you whether a wall of a certain length can exactly fit an integer number of pixels of a certain length.

# Your function should take two arguments: the size of the wall in millimeters and the size of a pixel in millimeters. It should return True if you can fit an exact number of pixels on the wall, otherwise it should return False. For example is_divisible(4050, 27) should return True, but is_divisible(4066, 27) should return False.

# Note: you don't need to use an if statement here. Remember that in Python an expression using the == comparison operator will evaluate to either True or False:

# >>> def equals_three(num):
# >>>     return num == 3
# >>> equals_three(5)
# False
# >>> equals_three(3)
# True

test.assert_equals(is_divisible(4050, 27), True)
test.assert_equals(is_divisible(4066, 27), False)
test.assert_equals(is_divisible(10000, 20), True)
test.assert_equals(is_divisible(10005, 20), False)

# my code

#
#@param: two integers, representative of wall size and pixel size
#@output: wall_length modulus pixel_size as a boolean
#
def is_divisible(wall_length, pixel_size):
    return wall_length%pixel_size == 0