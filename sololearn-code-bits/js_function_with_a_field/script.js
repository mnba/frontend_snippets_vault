//function could have a field? Yes! function
//  is a special sub-type of an object!
function foo(){
  return 123;
}
//field in a function 
foo.bar = "xyz";

console.log("typeof foo=", typeof foo);
console.log("foo=", foo, "\nfoo.bar=", foo.bar);
