let oddDigits: Set = [1, 3, 5, 7, 9]
let evenDigits: Set = [0, 2, 4, 6, 8]
let xdig: Set = [0,1,2,3,4,5,6,7,8,9]

print("Set 1 contains \(oddDigits)")
print("Set 2 contains \(evenDigits)")
print("Union of the two sets will contain")
print(oddDigits.union(evenDigits).sorted())

let alldig: Set = oddDigits.union(evenDigits)

print("Sub one set from another set is:")
var xdig2 = xdig //note, here it copies the object
xdig2.subtract(evenDigits) //subtract is -=, changes left operand in-place
print("xdig=", xdig.sorted())
print("xdig2=", xdig2.sorted())
print("alldig=", alldig.sorted())
print("xdig == alldig?:", xdig == alldig)

//---
let xdig3n = xdig // copy 
let xdig3 = xdig3n.subtracting(evenDigits)
// subtracting() works!
print("xdig3=", xdig3) 
