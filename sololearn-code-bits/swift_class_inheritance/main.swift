class Vehicle {
  var currentSpeed = 0.0
  var desc: String {
    return "traveling at \(currentSpeed) mph"
  }
  func makeNoise() {
    print("Making some noise")
  }
}

class Bicycle: Vehicle {
   var hasBasket = false
}

class Tandem: Bicycle {
   var currNumOfPassengers = 0
}

let tandem = Tandem()
tandem.hasBasket = true
tandem.currNumOfPassengers = 2
tandem.currentSpeed = 20.0
print("Tandem: \(tandem.desc)")

print("qrytydef \(type(of: tandem.desc))")//query type: type(of: xUnknVar)