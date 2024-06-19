module Math2
    PI = 3.141592605 #MA touch
    def self.square(x)
        x*x
    end
    def self.negate(x)
        -x
    end
    def self.factorial(x)
        (1..x).inject(:*) || 1
    end
end

puts Math2.factorial(8)
puts Math2::factorial(9)
