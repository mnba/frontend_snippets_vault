func sayHi(name: String) {
   print("Hi, \(name)!")
}
sayHi(name: "Dave") //"Hi, Dave!"
print("Fret=", sayHi(name: "Dave"), Void.self) //Fret=() which is Void
/* Void is a type, typename; Void.self is a reference to Void type
*/