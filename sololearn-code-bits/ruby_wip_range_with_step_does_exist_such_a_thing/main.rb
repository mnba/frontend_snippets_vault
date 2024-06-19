#Ruby range with step?? does exist such a thing

#Declaring an integer Range with step != 1 in Ruby - Stack Overflow
# https://stackoverflow.com/questions/3029785/declaring-an-integer-range-with-step-1-in-ruby

puts "step=2"
20.step(2) do |i|  #?? sone error
  print i, ' '
end

puts "\nstep=-2"
20.step(2,-2) do |i|
  print i, ' '
end
