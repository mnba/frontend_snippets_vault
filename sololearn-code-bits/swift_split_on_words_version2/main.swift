
//Read string array from stdin:
//https://blog.faodailtechnology.com/reading-standard-input-stdin-in-swift-45f81b3caf2c
//let inputline = readLine(strippingNewline: true)!
let inputline = "The string of words, augumented and decorated. What?"

//from upper page: read words array

let delimSet:Set = [" ","\t","\n",".",","]
//-let v = [" ","\t","\n",".",","] as Set .contains(".")//doesnot work
let v = ([" ","\t","\n",".",","] as Set) .contains(".") //works
print("v=", v)

let words = 
 inputline 
  .split {$0 == " "} //result type= type(of: x)= Array<Substring>
  //-.split {$0 in [" ","\t","\n"]}
  //.split { delimSet.contains($0) }
  .map (String.init)
  
print("words=", words)
