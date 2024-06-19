#NamedTuple Python equivalent in Ruby
Point = Struct.new(:x, :y)

origin = Point.new(0,0)
dest = Point.new(15, 42)

#print it: 
puts 'dest.y=', dest.y 
puts 'dest.y='+ dest.y.to_s
