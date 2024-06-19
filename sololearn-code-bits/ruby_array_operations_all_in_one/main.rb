# Array operations, all in one:
#
a = [1, 2, 3]
b = [4, 5]

res = a + b
print res # [1, 2, 3, 4, 5]

a = [1, 2, 3, 4, 5]
b = [2, 4, 5, 6]

res = a - b
print res #[1, 3]

# The & operator returns a new array containing the elements common to the two arrays, with no duplicates. 

a = [2, 3, 7, 8]
b = [2, 7, 9]

print a & b # [2, 7]

# The | operator returns a new array by joining the arrays and removing duplicates.
a = [2, 3, 7, 8]
b = [2, 7, 9]

print a | b # [2, 3, 7, 8, 9]
 

# returns the reversed array 

arr = [5, 3, 8]
res = arr.reverse
print res # [8, 3, 5]

#reverse the array in place using the reverse! method

arr = [1, 2, 3]
print arr.reverse!

=begin
Other Array Methods 

There are a number of other useful methods available for manipulating arrays.
Here are some of the most used ones:

array.length or 
array.size returns the number of elements in array.

array.sort returns a new array with the elements sorted

array.uniq returns a new array with duplicate values removed from array.

array.uniq! removes duplicates in place.

array.freeze safeguards the array, preventing it from being modified.

array.include?(obj) returns true if obj is present in array, false otherwise.

array.min returns the element with the minimum value.

array.max returns the element with the maximum value.

array.minmax returns the 2-element array with minimum and maximum elements of given array.
=end

ar= [1,2,3]
ar.freeze
begin 
  ar.push(4.5)
rescue ex
  puts "ex=#{ex}"
end


arr = [ 
   %w(a b c),
   %w(d e f),
   %w(g h i) 
]
0.upto(2) do |j|
  0.upto(2) do |i|
    print arr[j][i]
  end
end
