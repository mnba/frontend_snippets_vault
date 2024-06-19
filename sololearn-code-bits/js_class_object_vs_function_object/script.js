// version 1: function-object
function contact(name, number) {
    this.name = name;
    this.number = number;
    
    this.print = function(){ //emulates a method
      console.log(this.name + ": " + String(this.number) );
    }
};

var a = new contact("Anna", 12345);
var b = new contact("Boris", 987654321);
a.print();
b.print();

//version 2: class-object (the normal way!)
class contact2{
    constructor(name, number) {
      this.name = name;
      this.number = number;
    }
    
    //method declaration in JavaScript ES6+ class does not require any keywords
    print(){
      console.log( this.name + ": " + String(this.number) );
    }
};

let c = new contact2("Charlie", 1000);
let d = new contact2("Dasha", 2000);
c.print();
d.print();

