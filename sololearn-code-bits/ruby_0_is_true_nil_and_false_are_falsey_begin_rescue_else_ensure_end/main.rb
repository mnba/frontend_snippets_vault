if 0 #equivalents true
   puts '0 is true'
else
  puts 'else, 0 is not true'
end

=begin 
'ensure' clause is guaranteed to be executed, whether control flows to the rescue block or not. 
=end 

begin 
  puts "---\n1/0 ?"
  1/0 
rescue ZeroDivisionError => zde #except e
  puts "Can't do that! err=#{zde}"
else
  puts "did it?..."
ensure #=≈finally
  puts "Anyway, that {short activity} was fun!" 
end 

=begin
In Ruby only false and nil are falsey. Everything else is truthy (even 0 is truthy).
From: https://www.sololearn.com/learn/Ruby/2711/
=end

# in Ruby : false nil are Falsey, 0 is Truely 
puts 'Falsey? =<', (nil&&false).to_s, '>done' #prints first Falsey val; nil.to_s[tring] is ''; false.to_s is 'false' 
puts 'Truely? =<', !!0, '>done' #true. 0 is true in Ruby...