puts "two embedded functions with same name:"
def check()
  @b = true
  print @b

  def check()
   !@b ? false: true
   print @b 
  end 
end

check()
