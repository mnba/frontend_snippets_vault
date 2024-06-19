struct Resolution {
   var width = 0
   var height = 0
}

struct VideoMode { 
//class VideoMode { 
   var resolution = Resolution()
   var interlaced = false
   var frameRate = 0.0
}

var defaultRes: Resolution = Resolution()
print("Default resolution is \(defaultRes)")
var defaultVidMod : VideoMode = VideoMode()
print("Default videoMode is \(defaultVidMod) ")
/* struct and class are printed differently
*/

struct Resolution2 {
   var width = 0
   var height = 0
}
let vga = Resolution2(width: 640, 
                      height: 480)
print(vga)
