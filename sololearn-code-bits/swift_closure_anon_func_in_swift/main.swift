print("abc" > "def")

//1st method  t0 define anon func:
let names = ["Cc", "Aa", "Ee", "Bb", "Dd"]
var reversed = names.sorted(by: { (s1: String, s2: String) -> Bool in
   return s1 > s2
})
print(reversed)

//2nd <
var ordered2 = names.sorted(by: { s1, s2 in return s1 < s2 } )
print(ordered2)

// >
var reversed3 = names.sorted(by: { s1, s2 in s1 > s2 } )
print(reversed3)
print("names=", names) //remains intact

//3rd method
var reversed4 = names.sorted(by: {$0>$1})
print(reversed4)
//4th method!
var reversed5 = names.sorted(by: <)
print(reversed5)