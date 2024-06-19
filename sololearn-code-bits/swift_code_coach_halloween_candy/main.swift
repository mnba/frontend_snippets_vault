//Halloween Candy, solution in Swift

//Read Int from stdin:
//https://blog.faodailtechnology.com/reading-standard-input-stdin-in-swift-45f81b3caf2c

//nh = number of houses
let nh = Int(readLine(strippingNewline: true)!)!
if nh<3 {
  print("") //error
  //return
}
//dbcnt - dollar bills count
// C's ceil() === in Swift: .round(.up) or .rounded(.up)
var dbcnt = Int( (2.0 / Double(nh) * 100.0).rounded(.up) )
print(dbcnt)
/*
Contrary to task description the tests
 check against ceil() not against "round()"
*/