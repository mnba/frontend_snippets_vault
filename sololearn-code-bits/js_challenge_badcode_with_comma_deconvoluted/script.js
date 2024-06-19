//JS Sololearn challenge quiz #BadCode deconvoluted:
const l = console.log; //my helper
//Code from quiz:
var a = [({a:2},{a:3})]; //line 4

a /*same as*/, [{'a':3}]; /* ',' on line 4
 was comma operator leaving as a value the
 last expression,i.e. JS map-object {'a':3}.
 {a:2} here is shortcut writing form for {'a':2}.
 Very bad-smelling code at line 4.
 */

a[0] /*same value as*/, {a:3}; //"==" equality operator is broken in JS for objects, a[0]=={a:3} returns false

l(  a[0].a == 3 );
l(  a[0]['a'] == 3 );
//should print true 2 times
