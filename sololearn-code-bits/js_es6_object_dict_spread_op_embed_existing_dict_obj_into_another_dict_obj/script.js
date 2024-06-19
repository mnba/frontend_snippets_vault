var obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 5 };

console.log("obj1=", JSON.stringify(obj1), str(obj1));

const clonedObj = { ...obj1 };
const mergedObj = { ...obj1, ...obj2 }; 

function str(o) {
  return JSON.stringify(o);
}
// these print operations somehow did not work on Android app, today it works OK
// But worked OK on Desktop Chrome and on >node console
console.log("obj1=", JSON.stringify(obj1), str(obj1)); 
  //  obj1.toString() prints just [object Object]
console.log("clonedObj=", str(clonedObj));
console.log("mergedObj=", str(mergedObj));
 