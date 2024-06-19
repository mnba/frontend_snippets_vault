=begin
There exist different kinds of variables in Ruby,
Here\'s a list:
Local variable:    variable_name
Instance variable: @variable_name
Constants: ConstantName  / CONSTANT_NAME
Global variable: $global_variable_name

From: 
  Ruby Syntax Reference For Beginners - RubyGuides
  https://www.rubyguides.com/2019/10/ruby-syntax/

Also: OOP variables 
  @instance_var 
  @@class_variable 
  
=end

i=0
@j=1
K=2 #constant
$G_var1 = 10

print i,' ', @j, ' ', K, ' ', $G_var1, "\n"

# Better tests for some @j 
class CClass
  @i1=0
  @i2=2
  @@c3 = 3 #class variable 
  @@c4 = 4
  def initialize #constructor
    @i1=1
    @i2=20
  end
end

o= CClass.new
puts "o=#{o}, \n"
#puts "o.i2=#{o.i2}" #NoMethod i2: Instance var i2 is invisible from outside

# var, freeze the container-var (making it eff-ly const) and redefinition:
arr= [1,2,3]
arr.freeze 
puts "arr=#{arr}"
#arr.push(3.5) #=>FrozenError can't modify frozen array 

#redefining new `arr` var, this is OK
arr= [4,5] 
puts "arr 2=#{arr}"

# nil self in Ruby are 'pseudovarables'
#- type(nil)
