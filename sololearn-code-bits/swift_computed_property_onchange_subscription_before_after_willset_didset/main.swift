class StepCounter {
 var totalSteps: Int = 0 {
   willSet(newSteps) {
     print("About to set totalSteps to \(newSteps)")
   }
   didSet {
     if totalSteps > oldValue {
       print("Added \(totalSteps - oldValue) steps")
     }
   }
 }
}
let stepCounter = StepCounter()
stepCounter.totalSteps = 50
stepCounter.totalSteps = 150
stepCounter.totalSteps = 420
