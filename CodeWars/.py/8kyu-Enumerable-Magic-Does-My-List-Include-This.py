import code


# Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

test.assert_equals(include([1,2,3,4], 3), True )
test.assert_equals(include([1,2,4,5], 3), False)

# my code

def include(arr,item):
    return item in arr
