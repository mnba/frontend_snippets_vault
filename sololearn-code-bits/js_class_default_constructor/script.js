//Constructor
//from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
/*

If you don't provide your own constructor, then a default constructor will be
 supplied for you. If your class is not deriving from other class or is a 
 "base class", 
 the default constructor is empty:
constructor() {}

If your class is a derived class, the default constructor calls the parent
 constructor, passing along any arguments that were provided:
constructor(...args) { super(...args); }
*/

class Polygon {
  //var angles = [];
  /*constructor() {
     this.name = 'Polygon';
  }*/
  init(_angles){
      this.angles = _angles;
  }
}

const poly1 = new Polygon(); //here where default constructor works

//console.log(poly1.name);
// expected output: "Polygon"

poly1.init(3);
console.log(poly1.angles);

