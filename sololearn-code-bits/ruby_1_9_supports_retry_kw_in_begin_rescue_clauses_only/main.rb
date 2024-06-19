=begin
Ruby 1.9+ supports `retry` keyword in begin rescue clauses *only*.
You can use a continuation to replicate the behavior of the old retry
Code from:
What is the usage of `retry` on Ruby 1.9? - Stack Overflow
https://stackoverflow.com/questions/14951563/what-is-the-usage-of-retry-on-ruby-1-9
  Answer: https://stackoverflow.com/a/41251981
  
Note: Ruby said callcc is outdayed use Fiber
=end

require 'continuation'

# old retry re-implementation
def with_retry
 loop { 
   callcc { |cc| 
    def cc.retry; 
     call; 
    end; 
    yield cc; 
    return 
   }
 } 
end
 
# Usage example for old-retry: 
N=3
cnt=0
with_retry do |cc| 
  for n in 1..6
    puts n 
    cc.retry if n == 2 && (cnt+=1) < N
  end 
end 

