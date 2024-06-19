func swapInts(a: inout Int, b: inout Int) ->Void {
   let tempA = a
   a = b
   b = tempA
}
var n1 = 10
var n2 = 20

print("Before: \(n1), \(n2)")
swapInts(a: &n1, b: &n2)
print("After: \(n1), \(n2)")
swapInts(a:&n2, b:&n1);
print("After2: \(n1), \(n2)")