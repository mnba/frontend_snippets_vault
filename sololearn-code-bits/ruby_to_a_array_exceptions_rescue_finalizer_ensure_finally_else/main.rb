=begin
 verbose*)
  multiline
   comment in Ruby
 *) "=begin / =end!!!" 10 characters instead of /**/ 4 chars or ''' ''' 6 chars
=end

(1..9) #=> 1..9
(1..9).class  #=> Range
(1..9).to_a #=> [1, 2, 3, 4, 5, 6, 7, 8, 9]

#9.to_a #NoMethodError (undefined method `to_a' for 9:Integer)
#Did you mean? to_c to_r to_f to_i to_s

9.to_f #=> 9.0
9.to_r #=> (9/1)
9.to_c #=> (9+0i)
#9.to_c.to_a #NoMethodError (undefined method `to_a' for (9+0i):Complex)
#Did you mean?  to_r ...to_c

#9.to_w 
#NoMethodError (undefined method `to_w' for 9:Integer)

#
[:a,:b,:yo].class #=> Array #yo is for cyrrilic letter `ё`
[:a,:b,:yo].to_a  #=> [:a, :b, :yo]
a1=[:a,:b,:yo].to_a #=> [:a, :b, :yo]
a2=[:a,:b,:yo].to_a #=> [:a, :b, :yo]
a2-a1 #=> []
a3=a2-a1 #=> []
print 'a3=', a3, "\n" #=> a3=[]
[1,2,3,5] -[1,2]   #=> [3, 5]
[1,2,3,5] -[1,2,5] #=> [3]

#aev, array of evens
aev=[2,4,6,8,10] #=> [2, 4, 6, 8, 10]
aev.find {|i| i/2 >=4} #=> 8
aev.find {|i| i/2 >=6} #=> nil

# Range, Array. Array substraction is like set substraction.
(1...9) #=> 1...9 #Range class
(1...9).to_a #=> [1, 2, 3, 4, 5, 6, 7, 8] #range to array
(1..9).to_a - (1...9).to_a #=> [9]

#1: 
#Introducing totally unknown variable and initializing it by itself:
n=n #=> nil
n   #=> nil #it become declared and equals to nil

#const c=c #NoMethodError (undefined method `const' for main :Object)
#  Ruby said: " `const` Did you mean? conf"

begin #like, `try`
  C=nil  #=> nil #was: C=c
  C #=> nil
  puts 'C=='+C.inspect
  
  D=d #exception raised here: NameError for d 
  d #=> nil
  
  e #NameError (undefined local variable or method `e' for main:Object)
  D-d #NoMethodError (undefined method `-' for nil:NilClass)

#catch Exception:
rescue StandardError => exc 
  print "test-error1 caught:", exc, "\n"
  puts "Backtrace:", exc.inspect, exc.backtrace.inspect
end #of exception handling
 
puts "--1st done.\n\n" #1st \n is ignored by puts(), but why?? inserting second \n

#2: 
begin
  raise 'A test exception.'
  #if 0 & raise 'A test exception.' end #Error at `&' position, EOL strictly required after condition of `if`, this `$' is here only to indicate position
rescue StandardError =>  e
  print "Test error caught: ", e.message, "\n"
  puts "Backtrace:\n", e.backtrace.inspect
  puts "Inspect:\n", e.inspect
else
  puts "`else`=\"otherwise\" branch runned"
ensure #like, `finalize`
  puts "Finalizer called"
end
puts "--2nd done."
