#==============
# Ruby cycle keywords: next, redo, retry
# https://www.sololearn.com/learn/Ruby/2768/
=begin
 next is like continue in other languages: skip this loop iteration and proceed to the next one
 
 redo  statement causes the current loop iteration to repeat.
 
 retry statement causes (Ruby<=1.8) the whole loop to start again from the beginning. It had be in block with for/iterator or within begin/rescue type of block (try-catch in our language)
 Starting Ruby 1.9 retry can only be in rescue block, see my other codebit on that. 
=end
#==============
puts "Cycle with `continue` types"

puts "1"
i=1
N=11
cnt=0 #repeat the `3` 3 times
while i<N   
  print 'i=',i," "
  if i==3 && cnt <2
    cnt+=1
    next  #Works OK
    #redo  #Works OK. But: ?What is the difference with next here??
    #retry #error 'invalid retry' for Ruby 1.9+, see my other codebit
  else #cnt=0
  end
  print ' cp1:cnt=', cnt, ', '

  i+=1
  puts
  
  #break if i==9
end

print 'Out-of-cycle: i=',i,"\n"
puts 'Done.'

#------
# Increment-decrement operators in Ruby?
=begin 
i=0
#++i #this did not change i !
#i++ #this brought strange syntax errors
i+=1 #works OK
#Summary: there is no increment/decrement operatirs in Ruby
=end

#==== Now trying to make `retry` work in cycle: failed on that, because it is removed starting Ruby 1.9 
#See my separate codebit on that called "Ruby: 1.9+ retry kw "


=begin
Here is some beautiful colored syntax guide, but for `retry` this usage is absent:

Ruby\'s redo, retry and next keywords - Blog
https://blog.appsignal.com/2018/06/05/redo-retry-next.html

Here is "Ruby Programming" textbook but it has no retry kw described at all!
Ruby Programming - Wikibooks
https://en.m.wikibooks.org/wiki/Ruby_Programming
=end

# these tries no.2 and no.3 fail with "invalid retry" error
puts "try no.2"
cnt=0
for i in 1..5
  puts "i=#{i}"
  retry if (cnt+=1) <2 # restart from i == 1
end 

#
puts "try no.3"

cnt=0
#for i in (0...11) #retry: invalid retry 
#(N-1).times do |i| #retry: invalid retry 
(0...N).each do |i| #retry: invalid retry 
  puts "i=#{i}"
  retry if i==3 && (cnt+=1) #fails, error 
=begin
if i==3 && cnt <2
    cnt+=1''
    #next  #Works OK
    #redo  #Works OK 
    retry #fails, error 
=end
  print ' cp1:cnt=', cnt, ", \n"
end

