def calcProcTime(proc)
    start = Time.now
    proc.call
    dur = Time.now - start
end

proc1 = Proc.new do
    num = 0
    1000000.times do
      num = num + 1
    end
end

#puts calcProcTime(proc1) #0.039-0.040
print calcProcTime(proc1), " seconds\n" #0.038-0.098-...
