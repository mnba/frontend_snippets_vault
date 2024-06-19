
function onload(){
  el = document.getElementById('id1');
  if( el.classList.contains('c2')){
    console.log("c2 exists");
  }
  else {
    console.log("c2 exists");
  }
  console.log("el.classList=",
   Array.prototype.slice.call(el.classList,0));
   //[].slice.call(el.classList));//OK 
  /*err Array.slice(el.classList): "Error:"Array.slice is not a function""
  while it should say: method Array.slice() has not got `this`, instance object.
  */
}

//"window on load"
document.addEventListener('DOMContentLoaded', onload);

/**
Array.prototype.slice() 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
...
Array-like objects

slice method can also be called to convert Array-like objects/collections to a new Array. You just bind the method to the object. The arguments inside a function is an example of an 'array-like object'.

function list() { 
 return Array.prototype.slice.call(arguments);
} 
let list1 = list(1, 2, 3); // [1, 2, 3] 

Binding can be done with the call() method of Function.prototype and it can also be reduced using [].slice.call(arguments) instead of Array.prototype.slice.call.

Anyway, it can be simplified using bind.

*/

