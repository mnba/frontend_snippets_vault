console.log('-obj destructuring-start');
let obj = {a: 1, b: 'BString', c:'C-value' };
let {a, b, c, ccc} = obj;//key names are important:
// object is desyructured by recepient object key names
// not-found keys will not be matched

console.log(a);
console.log(b);
console.log(c);
console.log(ccc);

//---
console.log('-obj destructuring: key renaming');
var o = {h: 42, s: 'Str'}; //h, s are keys in `o`
var {h: foo, s: bar} = o;

console.log(foo); // 42
console.log(bar); // Str

//console.log(zzz); // Error: var not declared
//console.log(h); // Error: var not declared

// default values:
console.log('-obj destructuring: default  values');
var person = {id: 42, name: "Jack"};

let { id =10, age = 40} = person;
console.log(id); // 42
console.log(age); // 40

