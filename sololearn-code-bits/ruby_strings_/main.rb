
=begin
#Remove ' ' chars from get_s in next lines #Sololearn has bug, cannot handle comment
puts "Re:"+get s
print "Enter your name:"
name = get s.chomp
puts "Welcome, #{name}"
puts (get s.chomp.to_i) +5
=end

# Ruby strings are mutable!!
s="abcdefg"
s[3]='F';s[5]='G';s[6]='H'
puts "s=#{s}"
