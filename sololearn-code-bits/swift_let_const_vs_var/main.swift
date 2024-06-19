let myInt = 23
//myInt=29 //error:let==const in swift
var desc = "The number \(myInt) is"
switch myInt {
   case 2, 3, 5, 7, 11, 13, 17, 19:
      desc += " a prime number, and also"
      fallthrough
   default:
     desc += " an integer."
}
print(desc)