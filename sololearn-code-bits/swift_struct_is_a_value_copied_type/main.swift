
//structs are copied vy value
struct Resolution {
   var width = 0
   var height = 0
}

let hd = Resolution(width: 1920, height: 1080) //const
var cinema = hd //var
cinema.width = 1280
//After change:
//print("hd is still \(hd.width) pixels wide")
print("hd = \(hd)")
print("cinema = \(cinema)")

// classes copied by reference
class VideoMode { 
   var resolution = Resolution()
   var interlaced = false
   var frameRate = 0.0
}

let tenEighty = VideoMode()
tenEighty.resolution = hd
tenEighty.interlaced = true
print(tenEighty.resolution)

let alsoTenEighty = tenEighty
alsoTenEighty.interlaced = false
print(alsoTenEighty.interlaced)
/*
Rather than being declared as variables, tenEighty and alsoTenEighty 
 are declared as constants (using `let`). However, 
it's still possible to change their properties, because the *reference-onto* 
 values of the tenEighty and alsoTenEighty constants themselves do not actually 
 change.
*/

