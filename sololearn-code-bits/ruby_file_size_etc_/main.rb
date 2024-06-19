f = File.new("ruby_test.txt", "w+")
f.puts("some file content")

#puts f.size
print "file size=", f.size, "\n"
f.close
print "file zero? =>", File.zero?("ruby_test.txt"), "\n"

#---
f = File.new("ruby_test.txt", "a+") #w+
f.puts("some content")
f.close

puts File.readable?("ruby_test.txt")
puts File.writable?("ruby_test.txt")
puts File.executable?("ruby_test.txt")
