import numpy as np

# Create an array of rank 2
my_arr = np.array([[1,2,3,4], [5,6,7,8]])

print(my_arr)
print(my_arr[1, 2]) # access a single element
print(my_arr.ndim) # the rank
print(my_arr.shape) # n rows, m columns
print(my_arr.size) # number of elements 
print(type(my_arr)) # element type
