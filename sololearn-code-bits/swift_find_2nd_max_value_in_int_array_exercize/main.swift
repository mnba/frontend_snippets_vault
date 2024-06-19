//Find 2nd maximum value in a given array
// Input array:
//var arr1 = [4,5,8,6,2] //OK
var arr2 = [8,5,6,6,2] //fails, Algo-v1

// Algo version1
// param: gets 'anonymous' arrsy of ints
// returns 2-Int tuple
func get_max_two(_ arr: [Int]) -> (Int,Int) {
 var max = arr[0]
 var second = arr[1]
  
 for val in arr {
   if val > max {
     second = max
     max = val
   }
   else if val > second {
     second = val
   }
 }
 
 return (second, max)
}

//Test algo 1st version:
print("Algo version 1")
var (second1,max1) = get_max_two(arr2)
print(" Max. 2nd:",second1, "1st:",max1)

// Algo version2:
func get_max_two2(_ arr: [Int]) -> (Int!,Int!) {
 // handle edge cases
 if arr.count <= 1 {
   return (nil, nil)
 }  
 if arr.count == 2 {
   var (max, second) = (arr[0], arr[1])
   if second > max {
     //swap them
     (second, max) = (max, second)
   }
   return (max, second)
 }
 // algo, properly
 var max = arr[0]
 var second = arr[1]
  
 for val in arr[2...] { //array slice
   if val > max {
     second = max
     max = val
   }
   else if val > second {
     second = val
   }
 }
 
 return (max,second)
}

print("\nAlgo version 2")
var (max2,second2) = get_max_two2(arr2)
print(" Max-v.2. 2nd:",second2!, "1st:",max2!)

print("Test edge cases:")
var max = get_max_two2([9])
print(" Max-v.2 [9] 2nd:",max.1, "1st:",max.0)
max = get_max_two2([4,8])
print(" Max-v.2 [4,8] 2nd:",max.1!, "1st:", max.0!) 

/*
More on slices:
How can I perform an Array Slice in Swift? - Stack Overflow
https://stackoverflow.com/questions/38797663/how-can-i-perform-an-array-slice-in-swift

tuple.0 tuple.1 notation means addressing
  tuple elements by that index.
  
About forced unwrapping of Optionals and about Optionals in general please see:

Optionals In Swift: The Ultimate Guide – LearnAppMaking
https://learnappmaking.com/swift-optionals-how-to/

LearnAppMaking
https://learnappmaking.com/
*/