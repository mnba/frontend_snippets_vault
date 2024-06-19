const arr = ['0', '1', '4', '-2', 
  'a', '9', 'c', '16'];
  
const my_obj = {
  [Symbol.iterator]: function*() {
    for(let val of arr) {
      yield `${val}`;
    }
  }
};

//resls=result-list
const resls = [...my_obj] /* Here you can replace the '[...my_obj]' with 'arr'. */
  .map(i => parseInt(i, 10))
  .map(Math.sqrt)
  .filter((i) => i < 5) /* try changing the value of 5 to 4 see what happens.*/
  .reduce((i, d) => i + d); /* comment this line while you are changing the value of the line above */

console.log(resls);

//---
const myiterobj = {
    [Symbol.iterator]: function* (){
        yield 1;
        yield 111;
    },
};
const t1 = [...myiterobj]
  .map(i => parseInt(i, 10))
  .map(Math.sqrt)
  .filter((i) => i < 15)
  .map(r => Math.floor(r));
console.log('t1', t1);
