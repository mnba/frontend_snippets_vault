# `loop do` == while true
print 'loop do:'
x = 0
loop do
    print "#{x} "
    x += 1
    break if x > 10
end
puts

#----------
# Collection: Array

# operations
# removal operations
arr = [1, 2, 3]
arr.pop
print 'arr 1=', arr ,"\n" #=>[1, 2]


arr = [2, 4, 6, 8]
arr.delete_at(2)
print 'arr 2=', arr ,"\n" #=>

=begin
array delete/removal methods:
1) .pop to delete the LAST item of the array.
2) .shift to delete the FIRST item of the array.
3) .delete_at(index) to delete an item at an specific index position
4) .delete("item") to delete an item by its VALUE.
    e.g. arr = ["A","X","B"]
         arr.delete("X") #arr = ["A","B"]
5) Use .clear to delete all items in an array.
=end

# Access to Array elements by a range
nums = [6, 3, 8, 7, 9]
print 'nums 1)=', nums[1..3] ,"\n"

#Negative values also can be used in array range.
#For example:

$nums = [1, 2, 3, 4, 5, 6, 7]
nums = $nums
print $nums, 'slice-lk=', $nums[-2..-1] ,"\n"  # [6, 7]
print $nums[2..-2] ,"\n"   # [3, 4, 5, 6]
#=begin 
#=end
p 'nums 4)=', $nums.inspect ,"\n"
#puts nums  #Ruby is exotic PL: miltiline comment deletes (local?) variables, nums doesn't exist here anymore!

=begin
It is similar to list slicing in Python. 
But can you do a trick similar to Python\'s list_name[::-1] 
  which reverses the array/list?
switching the places of range denominators, doesn\'t work for this.
=end
print 'nums 5) (inspect=)', $nums.inspect ,"\n"
#can do it in another way:
#!! 
puts 'nums.reverse= ', $nums.reverse 

#===
begin
  # Array `-` 'minus' == like set substruction 
  a= ['nullito',1,2,3,4,5]
  b=[1,3,5]
  c= a-b
  puts "c=#{c} c[-2]=#{c[-2]}"
end

#------
# array minmax() returns array minimal and maximal elements of array at once
ar=[1,3,4,2]

# Error:
#ar.minmax {|x| x%2 ==0} #minmax for [false true false true] but 
# it expects -1/0/1 int values returned from block argument
#  no comparison operator > for boolean defined
#NoMethodError (undefined method `>' for false:FalseClass)
ar.minmax {|x| x%2 } # [3, 1] #wrong call: useless info.


#--------
#collect() and collect!()
ar= [1,2,3,4]
ar.collect! #=> #<Enumerator: [1, 2, 3, 4]:collect!>
ar.collect! {|i| i**2} #=> [1, 4, 9, 16]
ar #=> [1, 4, 9, 16]
p 'ar 1)', ar[1] ,'\n' #=> 4

=begin
collect!() Invokes the given block once for each element of self, replacing the
element with the value returned by the block.
See also Enumerable#collect.
If no block is given, an Enumerator is returned instead.
=end

a = [ "a", "b", "c", "d" ]
a.map! {|x| x + "!" }
p a #=>  [ "a!", "b!", "c!", "d!" ]
a.collect!.with_index {|x, i| x[0...i] } 
a #=>  ["", "b", "c!", "d!"]

# combination()
=begin
When invoked with a block, yields all combinations of length n of
elements from the array and then returns the array itself.
The implementation makes no guarantees about the order in which the
combinations are yielded.
If no block is given, an Enumerator is returned instead.
Examples:
=end

a = [1, 2, 3, 4]
a.combination(1).to_a  #=> [[1],[2],[3],[4]]
a.combination(2).to_a  #=> [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
a.combination(3).to_a  #=> [[1,2,3],[1,2,4],[1,3,4],[2,3,4]]
a.combination(4).to_a  #=> [[1,2,3,4]]
a.combination(0).to_a  #=> [[]] # one combination of length 0
a.combination(5).to_a  #=> []   # no combinations of length 5

# string * 1.5 
"xxx" *1    #=> "xxx"
"xxx" *2    #=> "xxxxxx"
"xxx" *1.5  #=> "xxx"
puts "xxx" *1.99 #=> "xxx"

# Range === element : element belonging testing operator
#Comparing ranges in Ruby - Stack Overflow
# https://stackoverflow.com/questions/19990202/comparing-ranges-in-ruby

if (0..9) ===5 #'===' is range includes? operator
  puts '5 is in (0..9) range'
else
  puts 'not in range'
end


