// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*#Specifications

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/next

//Define generator function
function* idMaker() {
  let index = 0;
  while (index < 5)
    yield index++;
}

function* idGentor(n) {
  let i = 0;
  while ( i < n){
    yield i++;
  }
}

//Use the generator function
//version 1: `while` cycle
console.log('version 1: `while` cycle')
 let gen = idMaker();
 let v = null;
 while ( v = gen.next(), !v.done ) {
   console.log(v.value);
 }

// version 2: `for` cycle
console.log('version 2: `for` cycle + patametric generator-func.')
for(let gen = idGentor(15), v = gen.next(); !v.done; v = gen.next()) {
  console.log(v.value);
}

//console.log(gen.next().value);
