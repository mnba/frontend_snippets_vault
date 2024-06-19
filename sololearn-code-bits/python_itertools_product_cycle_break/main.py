from itertools import product
for x, y, z in product(range(5), range(5), range(4)):
  print(f"{x} {y} {z}")
  #do whatever you want
  if x+y+z==0 or x+y+z > 3:
    continue #break


"""
original was from: 
https://stackoverflow.com/questions/653509/breaking-out-of-nested-loops/653517#653517
"""
