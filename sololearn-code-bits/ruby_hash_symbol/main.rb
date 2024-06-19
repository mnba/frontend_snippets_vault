# --- Hashes: --- 
car = {brand:"BMW", year:2016, color: "red", length:205}
car.delete(:length)
puts car.values

#--
hash1 = {9=>'a', 8=>'b'}
hash2 = {8=>'c', 7=>'d'}
p 'h2.merge h1= ', hash2.merge(hash1)

hash3= {a:'b'} #only string allowed be with : not by => 
#,'\n' '

# Range size ? == nil
('a'..'z').to_a
# => ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
  # "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
puts ('a'..'z').to_a.size #=> 26
puts ('a'..'z').to_a.size # 26 => nil

puts ('a'..'z').size #=> nil

# hash
h = Hash.new  #=> {}
h.default_proc = proc do |hash, key|
   hash[key] = key + key
end 
#=> #<Proc:0xb4445110@(irb):2>
h[2] #=> 4
h['dog'] #=> "dogdog"
#h[:bird] #NoMethodError (undefined method `+' for :bird:Symbol) 

#----
=begin 
Hash methods
There are useful methods available for manipulating hashes:

hash.delete(key) removes the key-value pair from hash by key.
hash.key(value) returns the key for the given value in hash,
          nil if no matching value is found.
hash.invert creates a new hash, reversing keys and values from hash; 
      that is, in the new hash, the keys from hash become values and 
      values become keys.
hash.keys returns a new array with keys from hash. 
hash.values returns a new array containing all the values of hash.
hash.length returns the length of hash as an integer.
=end

# Symbol
sid1 = :sid1
sid2 = :sid2
sid3 = :Sid1
Sid4 = 4
Sid5 = :sid5
print sid1, "\n"
puts "1 #{sid1} 2 #{sid2} 3 #{sid3}"
puts "typeof sid1= #{sid1.class}"
puts "4 #{Sid4} typeof= #{Sid4.class} "
puts "5 #{Sid5} typeof= #{Sid5.class} \n"

# Symbols in keys
ha1 = {:a=>'b', :c=>'d'}
ha2 = {a:'b', c:'d'}
puts "ha1=#{ha1} ha2=#{ha2} "
puts "ha1==? ha2 #{ha1 == ha2} "
# Ruby has normal hash comparison 
