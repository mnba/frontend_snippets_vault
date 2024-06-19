function person(name, age, color) {
    this.name = name;
    this.age = age;
    this.favColor = color;
}

var p1 = new person("John", 42, "green");
var p2 = new person("Amy", 21, "red");

document.write(p1.age,'<br/>\n'); 
document.write(p2.name,'<br/>\n');

//---
function person2(name, age, color) {
  let this2 = {};
  this = this2; //this raises SyntaxError exception 
  this.name = name;
  this.age = age;
  this.favColor = color;
  return this;
}
var p = new person2("Any", 1, "white");
document.write("p=", p);

