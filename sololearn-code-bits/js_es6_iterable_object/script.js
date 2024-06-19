let myIterableObj = { 
  [Symbol.iterator] : function* () {
    yield 1; 
    yield 2; 
    yield 3;
  }
};
// iterable embedded into array-constructor
console.log([1, ...myIterableObj]); //=> 1, *( 1, 2, 3 )
