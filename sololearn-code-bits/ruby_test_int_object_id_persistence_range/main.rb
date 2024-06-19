
for i in (1..42)
   if (2**i -1).object_id != (2**i-2+1).object_id
     print i, " ", 2**i,"not equal\n"
   else
     puts " #{i} yet equal"
   end
end
#Android termux irb: 2**30 eq, 2**31 not equal, object_id-s differ
#Sololearn environment: all 2^1..2^32 equal

