func minMax(array: [Int]) -> (min: Int, max: Int) {
   var currMin = array[0]
   var currMax = array[0]
   for value in array[1..<array.count] { //creates array slice array[1:] said it Pythoic way
      nif value < currMin {
        currMin = value
      } else if value > currMax {
         currMax = value
      }
   }
  return (currMin, currMax)
}
print(minMax(array: [1, 2, 3, 4, -6, 11]))
