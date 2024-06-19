#`retry` is for retrying failed operations (when you catch an exception)

i = 0 
N = 3 #const
done=false
begin
  puts "Trying to do something #{i+1} ..."
  if false #if 0
    raise 'oops'
  end
  done=true
  puts "Processing body done"
rescue => ex 
  puts " failed: #{ex}"
  i += 1 
  retry if i < N
  #here, retry count is exceeded: 
  done=false
  puts "Ok, I give up"
else
  puts "No problems encountered"
end 

puts "Done? #{done}"
