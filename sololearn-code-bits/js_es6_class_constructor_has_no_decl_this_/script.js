class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
  }
}

const square = new Rectangle(5, 5);
const poster = new Rectangle(2, 3); 

console.log(square.height, poster.width);

//2: anounymous class set to variable
var Square = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
  }
};

let Round = class {
    constructor(x,y,radius){
        this.x=x;
        this.y=y;
        this.radius = radius;
    }
};

const square2 = new Square(5, 5);
const poster2 = new Square(2, 3); 
const wheel = new Round(5,0, 4.5);

console.log(square2.height, poster2.width, wheel.radius);

// now both:
var Square3 = class Rectangle3 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

//test case of 2nd constructor :
var Rombo = class Rectangle4 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  //SyntasError:
  /*constructor(x,y,radius){
        this.x=x;
        this.y=y;
        this.radius = radius;
  }*/
};