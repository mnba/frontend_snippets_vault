//Popsicles (Ice lolly), solution in Swift

//Read Int from stdin:
//https://blog.faodailtechnology.com/reading-standard-input-stdin-in-swift-45f81b3caf2c

//nsibl sibling count, npops number of popsicle 
let nsibl = Int(readLine()!)!
let npops = Int(readLine()!)!
/*
//this was to hsndle input errors, but ptoduced error: "can't convert Int to Bool"
if (!nsibl || !npops) {
  print("error") //return
}*/
if nsibl==0 {
  print("error") //return
}

let toGiveAway = (npops % nsibl)==0
if toGiveAway {
    print("give away")
}
else {
    print("eat them yourself")
}
