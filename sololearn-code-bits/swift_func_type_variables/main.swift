func addInts(a: Int, b: Int) -> Int {
   return a+b
}
func mulInts(a: Int, b: Int) -> Int {
   return a*b
}
var mathFunc: (Int, Int) -> Int = addInts
//change mathFunc
mathFunc = mulInts

print(mathFunc(7, 12))

