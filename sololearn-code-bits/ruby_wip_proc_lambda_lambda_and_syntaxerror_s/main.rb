# proc lamnda{} lambda? SyntaxError's, & unary operator

#
proc( &lambda {} ) .lambda?
#=> true

=begin
reverse.lambda?
#=>NameError (undefined local variable or method `reverse` for main:Object)

'12'.reverse.lambda?
#NoMethodError (undefined method `lambda?` for "21":String)

[].reverse.lambda?
#NoMethodError (undefined method `lambda?` for []:Array)

&reverse.lambda?
# SyntaxError, unexpected &
=end

#-----
#Parts from https://learnxinyminutes.com/docs/ruby/

# syntax using `&` `atom`,
#  like .map(&:method) 
a = ["FOO", "BAR", "BAZ"] 
a.map { |s| s.downcase } 
#=> ["foo", "bar", "baz"] 
a.map(&:downcase) 
#=> ["foo", "bar", "baz"]

# Blocks can be converted into a 'proc' object, which wraps the block 
# and allows it to be passed to another method, bound to a different scope, 
# or manipulated otherwise. This is most common in method parameter lists, 
# where you frequently see a trailing '&block' parameter that will accept 
# the block, if one is given, and convert it to a 'Proc'. 
# The naming 'block' here is just convention; 
# it would work as well with any other name, like, '&pineapple'. 

def host_n_guests(hosts, &block)
  puts 'host_n_guests { #starts'
  puts block.class #=> Proc
  block.call(hosts)
  puts '}eo host_n_guests'
end

#host_n_guests('Hosts=A,B,C') &lambda(h){puts"guests=D,E,F h=#{h}"}

host_n_guests('Hosts=A,B,C') { puts "guests=D,E,F h='h'"}

#
sum = [1, 2, 3, 4, 5].reduce(&:+) 
puts "sum=#{sum}" #=> 15

# `yield` for method
# All methods have an implicit, optional block parameter. 
# It can be called with the 'yield' keyword.

# surround params with 
def surround 
  puts 'surrounder-{' 
  yield #call default-block
  puts 'surrounder-}' 
end 

surround { puts 'hello world' } #declare call of default-block
#=> { 
#=> hello world 
#=> } 


