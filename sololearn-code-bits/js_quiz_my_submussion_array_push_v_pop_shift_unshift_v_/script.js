//I suggested this quiz question to Sololearn.
// I provide it here with answers.

// Question:
/*Given array */
let arr = [2,3,5];
/*Which operation sequence will leave array
 intact? Select all such options. */

// Options:
let v1=arr.pop(); let v2=arr.pop(); arr.push (v2); arr.push(v1); //Option 1: leaves intact

arr.unshift(7);arr.unshift(11); arr.shift(); arr.shift(); //Option 2: leaves intact

arr.unshift(arr.pop()); //Option 3: changes

arr.push(arr.shift());  //Option 4: changes

//--end-of-quiz---
//PS opt3+opt4 applied one after another
//  also leave arr unchanged:
console.log(arr);

/*
Explanation: 
push(elt) - appends element `elt` to Array/list at the end

pop() - removes last element from Array; returns that elt

shift() - takes out the first elt from Array, returns that elt

unshift(elt) - prepends given element `elt` to Array at the start

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

