//JS const keyword

//1. JS const keyword vs var  in window
/*
const - JavaScript | MDN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

Description
This declaration creates a constant whose scope can be either global or local 
 to the block in which it is declared. 
Global `const`ants *do not become* properties of the window object, unlike 
`var` variables.
 */

var va = "aVariable";
console.log(window.va); //prints va ("aVariable") OK

const co = "TheConst!";
console.log(window.co); //prints `undefined`

//2. changing the const: JS const is mutable, if it is an object/array etc.
//    const in JS just cannot be reassigned a value.
/* The const declaration creates a read-only reference to a value. 
It *does not mean* the value it holds is immutable 
 — just that the variable identifier cannot be reassigned. 
For instance, in the case where the content is an object, this means the object's contents (e.g., its properties) can be altered.
*/
//changing "const" array:
const carr = ['Aaa', 'Bbb', 'Ccc']
carr[0]='000';
console.log(carr);

//changing "const" object
// obvious... trivial.
