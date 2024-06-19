class Size {
  var width:Double //*height:Double
  var height:Double = 0 //anti-*
  init(w:Double, h:Double) {
    width = w
    //height = h //*
  }
}
let twoByTwo = Size(w: 2.0, h: 2.0)
print("Width: \(twoByTwo.width)")
print("Height: \(twoByTwo.height)")