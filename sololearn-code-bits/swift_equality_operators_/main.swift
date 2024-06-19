struct Resolution {
   var width = 0
   var height = 0
}

class VideoMode { 
   var resolution = Resolution()
   var interlaced = false
   var frameRate = 0.0
}

let hd = Resolution(width: 1920, height: 1080)
var cinema = hd

let tenEighty = VideoMode()
tenEighty.resolution = hd
tenEighty.interlaced = true

let alsoTenEighty = tenEighty
alsoTenEighty.interlaced = false

if tenEighty === alsoTenEighty {
 print("Same")
} else {
 print("Not same")
}
