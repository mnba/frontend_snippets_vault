//Average Word Length, solution in Swift
import Foundation //for CharacterSet class

//Read string array from stdin:
//https://blog.faodailtechnology.com/reading-standard-input-stdin-in-swift-45f81b3caf2c
let inputline = readLine(strippingNewline: true)!

//from upper page: read words array
/*
let words_olderversion = 
 inputline  //.characters//deprecated starting Swift 4
  .split {$0 == " "} // .split {$0 in [" ","\t","\n"]}
  .map (String.init)
*/

let words = inputline.components(separatedBy: CharacterSet(charactersIn: " \n\r\t,:?\"")) //removed "." period character separator: a bug in problem tests, test case "some thing..." is counted as 2 words, including "..."

// Alternative way to split the string onto the words:
//inputline.components(separatedBy: CharacterSet([" ","\t", "\n"]))

//https://www.hackingwithswift.com/example-code/language/how-to-sum-an-array-of-numbers-using-reduce
// reduce(initialResult, {(result,Element)->{...});
//{(sum:Int, ith_word:String)-> sum+ith_word.count}
var totalwords_len = words.reduce(0, {$0 + $1.count})

let avg = Double(totalwords_len) / Double(words.count)

var avgUp = Int(avg.rounded(.up))
print(avgUp)
