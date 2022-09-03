# Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

# Please use the following function names:

# addition = add

# multiply = multiply

# division = divide (both integer and float divisions are accepted)

# modulus = mod

# exponential = exponent

# subtraction = subt

# Note: All math operations will be: a (operation) b

# Regular Test Cases that apply to your ADD and MULTIPLY functs.
test.assert_equals(add(1, 2), 3)
test.assert_equals(multiply(1, 2), 2)

# Add your own ones if you want.
# For example: test.assert_equals(add(a, b), a + b)
# Fill in values for the variables above     ^^^^^


#  my code

def add(a,b):
    return a+b
def multiply(a,b):
    return a*b
def divide(a,b):
    return a/b
def mod(a,b):
    print(a)
    return a%b
def exponent(a,b):
    return a**b
def subt(a,b):
    return a-b
