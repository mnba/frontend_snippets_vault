[1,2,3]==[1,2,3]; //false, see comments further
[1,2,3]!=[1,2,3]; //true
[1,2,3]===[1,2,3] //false 
/*
=Comparison_Operators=
Two distinct objects are never equal for either strict or abstract comparisons.

An expression comparing Objects is only true if the operands reference the same Object.

Null and Undefined Types are strictly equal to themselves and abstractly equal to each other.
--
If *both operands are objects*, then JavaScript compares internal references which are not equal when operands refer to different objects in memory.

- from MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators

==How to compare Javascripr Arrays==
https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript

*/