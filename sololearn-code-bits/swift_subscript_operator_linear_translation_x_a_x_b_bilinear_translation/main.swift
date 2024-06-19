//struct TimesTable {
struct LinearIntTable {
   let k: Int
   let b: Int
   subscript(i: Int) -> Int {
      return k * i + b
   }
}

struct LinearTable {
   let k: Float
   let b: Float
   subscript(i: Int) -> Float {
      return k * Float(i) + b
   }
}

let threeTimesPlusOneTable = LinearIntTable(k: 3, b: 1)
print(threeTimesPlusOneTable)
for i in 5..<8 {
  print(threeTimesPlusOneTable[i], terminator:", ")
}
print()

let threeFloatTable = LinearTable(k: 3.5, b: 1.5)
print(LinearTable.self, threeFloatTable)
for i in 5..<11 {
  print(threeFloatTable[i], terminator:", ")
}
print()

//====================================
struct BilinearTable {
   let k: Float
   let l: Float
   let b: Float
   subscript(i: Int, j:Int) -> Float {
      return k * Float(i) + l*Float(j) + b
   }
   subscript(i: Int, j:Float) -> Float {
      return k * Float(i) + l*j + b
   }
}

let oneAndHalfBilinearTable = BilinearTable(k: 1.5, l:2.5, b: 2)
print(oneAndHalfBilinearTable)
for i in 1...4{
  for j in 2..<6 {
    let J = Float(j)
    print(i,j,"→",oneAndHalfBilinearTable[i,J], terminator:", ")
  }
  print()
}
print()
//resumé: subscript is equivalent of "operator []" of C++
