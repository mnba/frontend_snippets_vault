#Ruby: operator overloading  WIP
# From: 
# http://nicholasjohnson.com/ruby/ruby-course/exercises/classes-and-objects/
# + next 2 topics: metaprogramming + operator overloading 

class Pet
  
  def play_chess
    puts "Now playing chess"
  end
  
  
end

flopsy = Pet.new
mopsy = Pet.new
#---

#operator overloading 
cottontail = mopsy + flopsy

cottontail.super_powers
#=> "Ability to hop really really quickly and also Flight"

#up↑ wip 