// `...obj` spread operator applied to `string` object: 
let string1= "ABCDEFG";
let arr = [...string1];
const obj1 = {...string1};
console.log(" string1=", string1,
  "\n arr=", arr, JSON.stringify(arr), 
  "\n obj1=", obj1, 
  "\n obj1.JSONified:",JSON.stringify(obj1)
  );
/* 
arr=>
obj1=> 
obj1.JSONified=> 
*/