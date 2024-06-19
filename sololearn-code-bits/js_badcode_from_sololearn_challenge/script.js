//from Node.js v13.0.0
// Sololearn app JS Code Playground  sometimes is non-operational

narr=[10,20,30]; //[ 10, 20, 30 ]
narr.reverse(); //[ 30, 20, 10 ]
narr; //[ 30, 20, 10 ]
narr.reverse(); //[ 10, 20, 30 ]

narr.reverse(3); //[ 30, 20, 10 ]
/* Array.reverse() ignores extra arg,
 JavaScript function ignores extra arguments.
*/
narr.reverse(); //[ 10, 20, 30 ]

var [first, ,last]= [1,2,3]; //undefined
first; // 1
last; //3

var [f, ,l]= [1,2,4,3];
f; //1
l; //4

var [f, ,s,l]= [1,2,3,4,5]; 

[f,s,l]; //[ 1, 3, 4 ]
f,s,l; //4

