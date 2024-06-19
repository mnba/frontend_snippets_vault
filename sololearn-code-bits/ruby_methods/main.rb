
#----------------
# Nested methods
#----------------
# Does Ruby support nested methods? Yes and no.
# Officially it doesn''t support [*]
# actually it works: see next examples of f()>g() and Test1 class

# [* ]detailed discussion: 
# Is it possible to have Methods inside Methods? - Stack Overflow
# https://stackoverflow.com/questions/4864191/is-it-possible-to-have-methods-inside-methods

# nested method
def f()
  def g()
   puts 'g'
   :g
  end
  puts 'f'
  g()
end

f() #-> f g => :g
f() #ok, works 

# example with class: 
class Test1
  def meth1
    def meth2
      puts "Yay"
    end
    meth2
  end
end

Test1.new.meth1
Test1.new.meth1 # no problem with redefinition of meth2 during second call

