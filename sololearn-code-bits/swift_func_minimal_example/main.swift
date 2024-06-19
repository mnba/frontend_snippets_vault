func sayHello(personName: String) -> String {
   var greeting = "Hello, " + personName 
   greeting += "-007";
   return greeting + "!"
}
print(sayHello(personName: "James"))

func f(x:Float) -> Float {
  return x*x;
}

// π
//let π = 3.1415926; //swift thinks it's Double
let π:Float = 3.1415926;
print("π²≈", f(x:π))

// magix spell dept.
let աբրակադբրա = "abracadabra magic spell!!"
func compileSpelling(s:String) -> String{
  var rs=""
  for _ in 1...3 {
    rs += s + " "
  }
  return rs
}
// run the spelling
func runSpelling(scode:String){
  print("call external supernatural forces:", compileSpelling(s:աբրակադբրա))
}

runSpelling(scode:compileSpelling(s:աբրակադբրա))