struct Matrix {
  let rows: Int, columns: Int
  var vals2d: [Double] //values-2-Dimensional
  init(rows: Int, columns: Int) {
     self.rows = rows
     self.columns = columns
     vals2d = Array(repeating: 0.0, count: rows * columns)
  }
  subscript(row: Int, column: Int) -> Double {
     get {
        return vals2d[(row * columns) + column]
     }
     
     set {
        vals2d[(row * columns) + column] = newValue
     }
     
  }
}

var matrix = Matrix(rows: 2, columns: 2)
matrix[0, 1] = 1.5
matrix[1, 0] = 3.2
print(matrix[0, 1])
print(matrix[1, 0])
