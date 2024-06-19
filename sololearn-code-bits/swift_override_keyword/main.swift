class Vehicle {
  var currentSpeed = 0.0
  var desc: String {
    return "traveling at \(currentSpeed) mph"
  }
  func makeNoise() {
    print("Making some noise")
  }
}

class Car: Vehicle {
  var gear = 1
  override var desc: String {
    return super.desc + " in gear \(gear)"
  }
  /*overridden property requires `override` keyword */
}

let c = Car()
print(c.desc)
