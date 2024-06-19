//IIFE in SoloLearn JS not working

// IIFE fails, all 3 cases: Uncomment line after comment line started with case1 or case2 or case3

//case1: Syntax error: Unexpected token "(" -on IIFE call, line 18
//() => { 

//case2: Syntax error: Unexpected token ( -here, on function declaration,line 9
//function(){ 

//case3: Syntax error: Unexpected token ) -on IIFE call, line 18
function g(){ 

"use strict"

console.log("IIFE Immediately Invocable Functional Expression, called");
// ^expected output
}(); //case3: error here, on call: Syntax error: Unexpected token (


// Explicitly declared functional expression=function, call: works
const f = ()=>{
"use strict"; // strict mode works too 
console.log("f() function called");
};
f(); //works
