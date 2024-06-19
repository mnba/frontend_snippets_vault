#
x = 10
y = 20
puts "x=#{x}", "y=", y
print x," ", y, "\n"
puts '---'

#
greet = Proc.new do |nm|
    puts "Welcome #{nm}"
end

goodbye = Proc.new do |nm|
    puts "Goodbye #{nm}"
end

def say(arr, proc)
    arr.each { |x| proc.call x}
end
    
people = ["David", "Amy", "John"]
say(people, greet)
say(people, goodbye)
