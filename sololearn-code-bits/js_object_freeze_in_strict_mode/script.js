//Object.freeze() : strict mode throws error
//normal mode continues and prints "42"
const f = ()=>{
"use strict";

const obj = {
  prop: 42
};

Object.freeze(obj); 

if(0) //tmp disabled
 obj.prop = 33;
 // Throws an error in strict mode

console.log(obj.prop);
// expected output: 42
};
f(); //IIFE in SoloLearn JS not working

//''normal''/non-strict mode:
{
 let obj = {
  prop: 10
 };

 Object.freeze(obj); 

 obj.prop = 20;
 // Ignored in 'normal' mode,
 // Throws an error in strict mode

 console.log(obj.prop);
 // expected output: 10
}
/*
origin: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

The `Object.freeze()` method 'freezes' an object:
* A frozen object can no longer be changed;
* freezing an object prevents new properties from being added to it, existing properties from being removed, 
* prevents changing the enumerability, configurability, or writability of existing properties, and 
* prevents the values of existing properties from being changed. 
* freezing an object also prevents its prototype from being changed. 
* :return: freeze() returns the same object that was passed in.
*/
