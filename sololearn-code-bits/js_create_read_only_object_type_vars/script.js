//readonly_value_Objects.js
//JS: Create const object = create read-only Object type variable
// `const` keyword works only with "primitive types", but not with object-type values: 
//    numbers, strings, other.
// For objects you need to call special functions to convert an object to read-only: 
//  Object.preventExtensions(our_obj)
//  Object.seal(our_obj)
//  Object.freeze(our_obj)
//More Details:

//Creating immutable objects in native JavaScript

//Javascript is a flexible language, you can redefine anything. 
// But when projects get complex we find problems with mutable data structures. 

//With the latest versions of JavaScript this situation changed. 
//Now it’s possible to create immutable objects. 

//I’ll walk you through how to do it in three different ways.

//Wait, what means `immutable`?
// Immutability of object means we don’t want our object be changeable in any way, 
// once we create them i.e.
// We want make them read-only.

//Suppose we need to define a car Object (`aCar`) and use its properties in our entire project. 
//We can’t allow modifying any data: by mistake or by malevolent person.

const aCar = {
    maxSpeed: 250,
    batteryLife: 300,
    weight: 123
};
const aCar2 = aCar; 
const aCar3 = aCar;

//1. Object.preventExtensions()
//   This method prevents the addition of new properties to our existing object. 
//   preventExtensions() is a irreversible operation: 
//   We can never add extra properties to the object again.

Object.isExtensible(aCar); // true
Object.preventExtensions(aCar);
Object.isExtensible(aCar); // false
// trying to define new property:
aCar.color = 'blue';  
console.log(' Object.preventExtensions() \nline 47: aCar.color=', aCar.color) // undefined

//2. Object.seal() 
//   It prevents additions or deletion of properties. 
//   seal() also prevents the modification of property descriptors.

Object.isSealed(aCar2); // false
Object.seal(aCar2);
Object.isSealed(aCar2); // true

// trying to define new property:
aCar2.color = 'blue'; //will silently fail to add new property to an object
console.log(' Object.seal() \nline 59: aCar2.color=', aCar2.color); // undefined

delete aCar2.batteryLife; // false
console.log('line 62: aCar2.batteryLife=', aCar2.batteryLife); // 300

//Object.defineProperty(aCar2, 'batteryLife'); // TypeError: Cannot redefine property: batteryLife


//3. Object.freeze()
//  It does the same that Object.seal() plus it makes the properties non-writable.
// 
//  Making variable truely "read-only" or truely `const`ant.

Object.isFrozen(aCar3); // false
Object.freeze(aCar3);
Object.isFrozen(aCar3); // true

// trying to define new property:
aCar3.color = 'blue';
console.log(' Object.freeze() \nline 76: aCar3.color=', aCar3.color); // undefined

delete aCar3.batteryLife;
console.log('line 79: aCar3.batteryLife=', aCar3.batteryLife); // 300

//Object.defineProperty(aCar3, 'batteryLife'); // TypeError: Cannot redefine property: batteryLife

aCar3.batteryLife = 400;
console.log('line 84: aCar3.batteryLife=', aCar3.batteryLife); // 300


// .Extra notes

//  Use strict mode ('use strict';) if you want to throw an error when trying to modify an immutable object.
(function (){ //IIFE, to invoke strict-mode.
  'use strict';
  //aCar3.weight=1000; //one ton //open this line and this one ton will crash this little code.
  console.log(' \'use strict\' \nline 92: strict mode: aCar3.batteryLife=', aCar3.batteryLife); // 300
})(); 

console.log('The End.');


//Source: https://www.jstips.co/en/javascript/creating-immutable-objects-in-native-javascript/
//"Creating immutable objects in native JavaScript" by @loverajoel on Nov 25, 2018
