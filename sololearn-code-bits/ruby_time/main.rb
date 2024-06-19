#current time
t = Time.now
puts 't.indpect()=', t.inspect()

#year, month, day
puts t.year
puts t.month
puts t.day

#custom date
t = Time.new(1988, 6, 10)

#day of week: 0 is Sunday
puts 'week-day=', t.wday

#day of year
puts 'year-day=', t.yday
#---