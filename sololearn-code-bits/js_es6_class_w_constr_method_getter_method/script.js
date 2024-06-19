class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  
  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
  calcArea2() {
    return this.area;
    //this.area; //didn't go: `return` is needed
  }
}

const square = new Rectangle(5, 5);

console.log(square.area, square.calcArea2() ); // 25