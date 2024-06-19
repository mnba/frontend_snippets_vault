func printer(strs: String...) -> String {
  var stotal = ""
  
  for s in strs {
    stotal += s + " "
  }
  return stotal + "#" + String(strs.count)
}
print(printer(strs: "ABC", "АБВ", "ԱԲԳ"))