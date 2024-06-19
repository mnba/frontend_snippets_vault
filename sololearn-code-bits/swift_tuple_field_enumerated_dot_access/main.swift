
//Tuple field, enumerated, dot-access
let error = (404, "Not Found")
print("The status code is \(error.0)")
print("The status message is \(error.1)")
//print("The status message is \(error[1])")//Error: `error` var has no method 'subscript'
