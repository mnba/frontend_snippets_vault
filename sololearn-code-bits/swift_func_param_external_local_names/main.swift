func mul(a n1: Int, b n2: Int) -> Int {
   //return a*b //can't use external parameters internally 
   //  this means external parameters are external-only beauty-decoration 
   return n1*n2
}
print(mul(a:2, b:3))
