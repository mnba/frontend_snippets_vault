struct Size {
   var width: Int 
   let height: Int 
}
var size1 = Size(width: 10, height: 35)
size1.width = 6
print(size1.width)

//size1.height  = 6 //error
print(size1.height)