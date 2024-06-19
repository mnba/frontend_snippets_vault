// these are marignal and extra-bad codes, their idea is taken from codes of SoloLEarn challenges
//  Helper func:
let str = o=>JSON.stringify(o);

// Enlengthening the array via index assignment:
let arr =  [1,2,4]; //[0,1,2,3,4];
arr[5] = 55;
console.log(arr);
console.log('arr.length=', arr.length); //=>6
console.log('arr[4]=', typeof arr[4]); //=>undefined empty spaces are: undefined

// wrong sums:
let n = 10;
console.log(10 + null);         //10+0==10
console.log(10 + undefined );   //NaN
console.log(null + undefined ); //NaN
console.log(undefined + null);  //NaN
console.log('STR' + undefined );  //'STRundefined'
console.log(undefined + 'STR');   //'undefinedSTR'
console.log(typeof ( +'123'), +'123' ); //number 123  //string to number conversion
console.log(typeof ( 0+'123'), 0+'123' ); //string '0123' 
console.log(typeof ( '123'+0), '123'+0 ); //string '1230'

// two objects with same name, different types
let foo = ()=> {
  var foo;
};

console.log("foo=", str(foo), ", foo()=", str(foo()), ", typeof=", typeof foo, '.');
//...

"donald".split("d");//=>['', 'onal', '']
"mcdonalds".split("d");//=>['mc', 'onal', 's']
//"dmcdonalds".split("d"); //=> ['','mc','onal','s']

typeof constructor; //=> 'function'
constructor; //=>[Function: Object]

> this
Object [global] {
  global: [Circular],
  //...
  },
  queueMicrotask: [], //...
}

this.constructor //[Function: Object]
constructor //[Function: Object]

this.constructor == constructor //=>true
this.constructor === constructor//=>true

=== 
