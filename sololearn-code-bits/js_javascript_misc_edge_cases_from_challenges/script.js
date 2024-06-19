//Miscellaneous Edge Cases and abuse of JavaScript the language,
// with ideas inspired and some code snippets taken from 
// SoloLearn Challenges.

/* Code is organized by blocks {} with `let`/`const` keywords within, per one challenge, i.e, minimum `var` keywords, to avoid global scope variable interfering. And to avoid "variable hoisting" phenomenon of JavaScript. 
*/
console.log("See JS code tab in SoloLearn");

// 1. class instanciation
{
// mc -- brief for "MyClass"
class mc{}  //Note: no ';' at the end but still works

//var o = mc(); //=>error, 
/* Thrown:
TypeError: Class constructor mc cannot be invoked without 'new' */

let o = new mc(); //correct

o; //=> mc {}

// mc(); //=>error, `new` needed
 /* Thrown:
TypeError: Class constructor mc cannot be invoked without 'new' */
//In fact this is Syntax error not TypeError: creation the instance of of class requires `new` keyword

new mc(); //=> mc {} //OK
}


// 2. interval arithmetic
{
const n = Math.floor( Math.random()* 12 ) + 8;
console.log(n); //8
Math.floor( Math.random()* 12 ) + 8; //17
Math.floor( Math.random()* 12 ) + 8; //10
// possible values of n are: [0.0, 1) * 12 == [0.0, 12) == [0;11]
 // [0;11] + 8 == [8; 19]
 //Finally `n` belongs_to [8, 19] segment
}

// 3. equality ==
{
const a = [1, 2, 3];
const b = [1, 2, 3];
const c = "1, 2, 3";

a==b; //false
[1,2,3]==[1,2,3]; //=> false 
 /*Array comparison is not available in JS. These two "objects" have different ids (VM internal references), hence `false`.
 */

a==c; //false // "1, 2, 3" != "1,2,3"
a.toString(); // '1,2,3'

const c2 = "1,2,3";
a==c2; //true

}

//another one:
// complicated calculations on array index after it is out of use:
{
let arr = [5,4,3,2];
console.log("arr=", arr);
// this cycle will finish having i=3:
//for (var i of Array(arr.length).keys()){
// this cycle will finish having i=4:
let i;
for (i=0; i < arr.length; ++i){
  arr[i] *= i;
  console.log(i, arr[i]);
} 
/* => 
0 0
1 4
2 6
3 6 */
console.log("i,i/2,arr[i/2]=", i, i/2, arr[i/2]); //=> 4, 2, 6
}

// `eval` on number string, fractured and glued back
{
let d = "1", e= "2 *2";
eval( d + e ); //=>24 //-> "12 *2"

console.log('eval=', eval( d + e ) );
}

{
  console.log('1 + null=', 1 + null, '1 + undefined=', 1 + undefined );
  console.log('"20"*1+20=', "20"*1+20 );
}

// 3.`return` is not allowed in global scope
{
let v = 0;
if( v == 0 ) 
  ;//return true; //commented out `return` to avoid SyntaxError on this line
else
  ;//return false; //same here 
  
/* Thrown:
if( v == 0 ) return true; else return false;
             ^^^^^^
SyntaxError: Illegal return statement
*/
}

// another one
if ("String" == ["String"]){
  const s = new String("String");
  console.log( s == String ); // "String" != String class, different types, not coercible even in JS
  //i.e. "String" != "[Function: String]"
}
else 
  console.log("else");
//=>false //from line 88
/* Explanation: 
> String
[Function: String] //class is called [Function] in JS, instance-based OOP flavour.
*/

"String" == ["String"]; //=>true
1 == [1]; //=>true
/* 
Explanation.
During the Object and Array -to-primitive comparison, Object/Array is converted to string before comparison.

That is how
[1] becomes '1',
["abc"] becomes 'abc'.
primitive value converted too, and that is why they are "equal"(==) in JS.
 */
 
// another one ("a.o.", ao)
"127.0." + 0.1; //'127.0.0.1'
"127.0" + 0.1; //'127.00.1'
0.1 + "127.0"; //'0.1127.0'

//a.o.
console.log( + "Abc" + "Def"); //'NaNDef' 
+"Abc"; //NaN
0+"Abc"; //'0Abc'
+[]; //0
+''; //0
+'a'; //NaN

//a.o.
typeof []; //'object' //==typeof([])
typeof new Array(5); //'object'
// "All" complex datatypes are objects.

//ao
// tries to confuse by i-j renaming
// setTimeout() example
{
setTimeout( () => console.log("_______\nBecause of setTimeout() this example will be printed the last:\n array elements:"), 340);//print this header before array

for(let j=0, i=4;  j<5; ++j){
 (function(i) {
    setTimeout( function() {
      console.log(i);
    }, 350);
  }) (j);
} /* => 
0
1
2
3
4 */ //this will be printed in console after all the rest, due to timeouts.
}

//ao
console.log('ceil=', Math.ceil(17.8));//=>18 
//ceil() rounds up; Math.floor(x) rounds down.

//ao
// Prime numbers
// Check if `n` is prime number using modified trial division algorithm: check  whether `n` is divisible by [2,floor(n/2)] 
//another algorithm for this could be Sieve of Eratosthene algorithm
{
function is_prime(n){
  for(let i=2; i < n/2; ++i){
    if (n % i === 0) //`==` or `===` ? all 3 expressions are of Number type
      return false;
  }
  return true;
}
console.log('is-prime 37:', is_prime(37));
console.log('is-prime 36:', is_prime(36));
}


// Super-number
// super-number is a number that can be printed in other way
{
  let superNumber = {
    toString : () => "1",
    valueOf : () => "n", //n means «number»
  };
  console.log("number+superNumber= ",
   "5"+superNumber); //=>"5n"
   
  // important: valueOf() string-convertor called here, not toString()
  //superNumber is prototype-object based on object `{}` (=dictionary in JS)
}

{
  // string has charAt() method in JS
  console.log("ABCD.charAt(2)=", "ABCD".charAt(2)); //=>"C"

/* Previously encountered bug in Sololeatn
  Sometimes Sololearn app's console.log()
  prints 2nd and next arguments 
  but not always.
*/
}

//NaN Not-a-Number (equivalence tips)
// NaN class has only one object called NaN
//
// NaN is not equal to NaN, never.
// but NaN.is(NaN) ==true and 
// also sometimes
// NaN can be included in Array, and found
{
 console.log(typeof NaN); //=>number
 
 console.log(` NaN==NaN? NaN===NaN? => ${NaN==NaN}, ${NaN===NaN}`);//=> false, false //NaN equals to nothing even NaN != NaN in == and === sence
 let arr = [1, NaN, 2, 3];
 console.log(`but arr=[${arr}] includes() NaN? => ${ arr.includes(NaN) }`);//=>true //nevertheless it is true, but why? see the answer at next:
 /*
It is a subtle thing why 
[NaN, 1].includes(NaN) is true, 
while (NaN === NaN) and (NaN == NaN)
 are both false.
The answer is that JavaScript Array.includes() function uses for comparison the
SameValueZero() equality function, which is one of 4 availible equality check functions of JavaScript (x==y, x===y, Object.is(x,y) and SameValueZero(x,y) ).
The particularity of SameValueZero() function is that SameValueZero(NaN,NaN) is true, unlike the `==` and `===` operators. 

For more details see this (especially the comparison table there) ->
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value-zero_equality 
 */
 
 //Note: Otherwise, `arr.includes(el)` in Javascript
 //is equivalent to `arr.contains(el)` in Python.
}

// +string : convert `string` to `number`
{
 console.log('+"1" + +"1"=', +"1" + +"1"); //=> 2 // +"1" ->1 ; 1+1 ->2
}

// 1+1 is 2 - in indexes of arrays too
{
 let arr = ["a1","b2","c3","d4"];
 let sub_abc = arr.slice(1, 1+1+2); //arr.slice(1,4)==[b2,c3,d4] no more elements
 console.log(`sub_abc= ${sub_abc}`);
 console.log(`sub_abc[1]= ${sub_abc[1]}`); //=>"c3" //arr[1:][1]==arr[2]=="c3"
}

// Number to string conversion is not always obvious; 
//Also: number += string converts lhs (left-hand-side) `number` to `string`
{
 let x = 6;
 let y = 0;
 y += ++x + "" + x; //=> "077" detailed: 
 // 7 +"" -> "7"; "7"+7 -> "77"; 0 + "77"-> "0"+"77"->"077"
 console.log(0 + "77");
 console.log(y);
}

//toFixed() performs floating number rounding
{
  const almost2 = 1.559.toFixed(2);
  console.log(`almost2=${almost2}`);
  /*=> 1.56 not 1.55. toFixed() makes rounding not just truncating floating point digits */
  
  //See also: 
  console.log(`almost2 ii)= ${ 
    1.559.toFixed(1) }`);
  console.log(`almost2 iii)= ${
    1.559.toFixed(0) }`);
  /*these ugly new-lines within `` interpolation strings were imposed because of uglyness of Sololearn algorithm of automatic line-breaking in wrong places */
}

// "string" is not always of `String` type
// and
// new String() is of `object` type.
// JavaScript so JavaScript.
{
  console.log(`hello, string types!`);
  let h1= "hello"
  let h2= new String("hello")
  console.log(`hello? ${h1==h2} ${h1===h2}`);//=> true, false
  console.log(`types of String= ${typeof h1}, ${typeof h2}`); //=> string, object
  // h1 is `string`, but
  // `String` h2 (as JS thinks) is an `object`. 
  // You see, JS is a weaky-typed language.
}

//Using '$' within variable name, along with unicode characters
// catch exception and print console.error()
{
  try{
    let hi1="Gamarjoba Vaso";//"Hi Vaso!"
    console.log(` ${hi1==$$Գամարջոբա$}`);
    //No salutation... (Gamarjoba arvitsi)
  }
  catch(err){
    console.error('"DemoError": ' + err);
  }
}

{ 
  console.log("Continuing after '$$' exception...");
}

//JS: const is not const
// `const` is not necessary means constant value
{
  console.log("Is this const immutable?");
  
  const n = 5;
  //n=3;//disallowed. Error Assignment to constant variable
  
  const arr =[3,4,5];
  //arr=[1,2,3];//disallowed -"-
  arr[1]= 111;//allowed
  arr.push("hen and cock"); //allowed
  arr.unshift("put it into the oven");//allowed
  
  const o= {a: "A", b:"B"};
  o['a'] = "Dzeta";
  o.b = "Theta";
  o.Omega = "omicron";
  //^all allowed
  
  const s = new String("Pug");///was "Moska" "Моська", "the Pug", "the dog"
  //s = "Vaska";//disallowed ///Васька, the cat
  s[0]= 'V';//allowed, but *s) //=> s===String("Pug") unchanged
  s[1]= 'a';//allowed, but *s) //=> same -"-
  
  //Declaring const within const
  const arrC = [s]; //s was const
  s[0]= 'Ružka'; //change const in const? //allowed, but *s) ///"Рузька",the cat №2
  
  console.log(typeof arr, arr,'\n',
   typeof o, Object.entries(o), '\n', 
   typeof s, s,'\n',//=>object, Pug
   typeof arrC, arrC);//object, Pug
}
/*Explanation: JS will check the constnancy  (invariance) of value, and value for JS in case of Object, Array and String classes - is just a reference value to the values underneath.
So you disallowed to change only the 'top' reference, 
i.e. the top-level value in the "tree" of references, but you can change the values
within these compound data types.
*/
/*
*s) In JavaScript, strings are *immutable*, which means the best you can do is to create a new string with the changed content and assign the variable to point to it.
So while the `const` keyword was allowed, it is yet useless: Strings in JS are always immutable. 
*/


//interfering into value of iteration variable within cycle:
// change it after body of cycle
{
 let x= 1;
 for(; x<6; x+=2 ){
   x = x*x;
   console.log(`x=${x}`);//=> 1; 9
 }
 console.log(`final x=${x}`);//=>11 //-> 9+2
}

//confusing with closure-bound variable 
{
  //What will be output? S? or Z? or S?
  (function f(x){
    return (function g(y){
      console.log(x);
    }) ('Z');
  })('S');
  //=> 'S'
}

// length of split
{
  let s = "VasilyBankin"; //or, "Бутылкин"
  let arrc = s.split('', 6);
  console.log(`Who is Bankin? arrc=[ ${arrc}  ]`); //=>[ V,a,s,i,l,y ]
}

// confusing indexes
{
  let i = 1;
  let arr = [1,5,9];
  arr[i] = arr[i+1];
  console.log(`confused indexes value: ${arr[0] + arr[1]}`); //=>10 //arr=[1,9,9]
}

//`string` multiply int `number` == ?
{
  console.log("(number + string) * number == ? ");
  console.log("sss" * 3); //=>NaN
  console.log(new String ("Aso") * 1); //NaN 
  
  console.log("11" * 3); //=>33
  console.log("null" * 3); //=>NaN !
  
  // now +, *, % 
  console.log( ("3"+4 ) * ("4" % 3)); //=> number(34)
  //It is not-NaN only if a string is a number-convertable value
  
  //reversing the + order: 
  console.log( (4 + "3" ) * 1); //=> number(43)
  console.log( "str" * 3 ); //=> NaN
}

// changing argument value in a function
{
  var gl = 2; //"global"
  function func(x){
    x = 20;
  }
  func(gl);
  console.log(`gl (global)= ${gl}`);
}

// confusing names: function +), argument, field
// +) variable referring function
// This is the most bad code yet found by me in SoloLearn JS Challenges, see further why
{
  var ff = function (ff){
    this.ff = 10; //`this` === `global` === window (*in browser*), `ff` is a new field for global object
    console.log(`in-func: ff=${typeof ff}, ${ff}, this=${typeof this}, ${this}`);
  }
  ff(1); //=>1 //`ff` name now denotates function; after run `ff` will denotate
  // global variable [number 10] created by line ^ this.ff = 10;
  console.log(`global: ff=${typeof ff}, ${ff}`); //number, 10
  // At this point we understand that 'ff' denotates different things on every
  // single line of this example. That is why this is the WORST JavaScript code
}

//another one
//function name in outer scope
{
  const f = function g(){ return 42;};
  console.log(typeof f);//=>function
  console.log(typeof f());//=>number
  console.log(typeof g);//=>undefined 
  
  try{
   console.log(typeof g());//ReferenceError: g is not defined
  }
  catch(e){
    console.error('"DemoError"-2: '+e);
  }
  /*Explanation.
The line `let f = function g(){};` 
declares name `g` within the scope of expression at right-hand side, and out of that scope the name `g` is unavailable. 
  */
}

//Filling the filled-in array
{
  console.log("Filling the filled-in array:");
  let x=y=3;
  let arr=[1,2,3].fill(0,x,y);
  console.log(arr[0]);//=>1
  console.log(arr);//=>1,2,3 array is unchanged after fill() call
  /*  
arr.fill(value[, start[, end]])   
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

The `fill()` method changes all elements in an array to a static `value`, from a `start` index (default 0) to an `end` index (default array.length). 
It returns the modified array.
  */
  console.log([7,8,9].fill(0,x,6));//=>[7,8,9] fill does not change length of array 
}

//Strange convoluted 2 functions
{
  console.log("Strange convoluted 2 functions");
  
  function f(x){
    return function g(y){
      return y + 1; //->3+1
    }(++x) //x=3, g(3)->4
    + x; //4+3=> 7
  };
  console.log( f(2) );
}

//confusing about tuples
// Tuples in Javascript??! No!
{
  let t = (1,2,3);
  console.log(`"tuple" t= ${t}`); //=>3
  //Because it is not tuple, no tuples in JS
  // it's simply comma-expression 1,2,3 returning the latest subexpression
  // taken into parentheses
}

// type conversion(val) vs new ClassName()
{
  ; //it's tg3 same thing
}

//for snippet-2 in HTML Splash-promo of this code 
// trying to find good NL expression of this PL's geist
{
 console.log("function unknown...");
 {
  let unknown = (value) => value.undefined;
  console.log( unknown ({}));
 }
 function unknown(value) {value.undefined;}
 console.log( unknown ({}));
}


// attribute for primitive value: ignored
{
  console.log("Set attribute on primitive value:");
  
  let s1 = "the_string";
  s1.attr1 = "isDefined?";
  console.log( s1.attr1, 's1 is', typeof s1); //=> undefined 
  
  let s2 = String("TheString");
  s2.attr1 = "isDefined2";
  console.log( s2.attr1, 's2 is',typeof s2 );//=>undefined string
  
  let s3 = new String("TheString!");//object!
  s3.attr1 = "isDefined";
  console.log( s3.attr1,'s3 is', typeof s3 );//=> isDefined object
}

//Boolean()
{
  console.log(`The Booleans :`);
  console.log(` Boolean(), Boolean(0), Boolean(33),Boolean(''), Boolean('Sss'), Boolean({}), Boolean({a:'a'})=> `,
  Boolean(), Boolean(0), Boolean(33), Boolean(''),Boolean('Sss'), Boolean({}), Boolean({a:'a'})
  );//false, false, true,true,true, 
  ;
}

// "total brain explosion": compute these if you can : 
// 10 (sub-)expressions in 20 seconds. 
// You need to turn you into Srinivasa Ramanujan-mode calculator to solve this.
// (Side note. This challenge is indeed off-topic from programming, but this is also the attitude of authors of challenges. The essence of SoloLearn-kind of Challenge. )
{
  console.log('Once Ramanujan enters the room, and then...');
  let c = 6 - (77 - 7)/2; //->6-(70/2)= 6-35 => -29
  c = Math.round(c); //c = -29
  //now confusing with array index-value pairs
  let arr = new Array(3);
  arr[2] = 7;
  arr[0] = 11;
  arr[1] = 16;
  //  -> arr=[11,16,7]
  let x = arr[1]-arr[0];//->16-11 = 5
  let y = c % 5; //-29 % 5 = -4
  // And now answer 3+1 questions:
  // is x==5?; y==5? c==5? 5==5?
  console.log(`c=${c} x=${x} y=${y}`);
}

{
  console.log("Negative Infinity -∞");
  console.log("-1/0=", -1/0);
  console.log("0/Infinity=", 0/Infinity);
  console.log("0/Infinity - Infinity=", 0/Infinity - Infinity);
  //4. {infinite cycle over i, --i}
}

{
  let v = "2"*3;
  console.log("typeof v, v=", typeof v, v);
}

{
  let orexp= 0 || 0 || false || '' || null || undefined || 0 || 1 || 2 || 3 || {}; //=>1
  console.log("or expression=", orexp);
  //Note: {} is not null.
  //=> 1 ; such OR-Logical chain returns first non-<false> value. 
  
  let andexp= true && 1 && 't' && {} && []  && 100 ;
  console.log("and expression=", andexp);
  //=> 100 ; such AND-Logical chain returns last <true> value. 
}

{
console.log("Object-deconstruct class object");
class C1{
  constructor(w,h){
    this.w=w;
    this.h=h;
  }
  //function f(){ return 'f'; }
};
let o1= new C1(10, 20);
let {prop1, prop2} = o1;
console.log("prop1, prop2=", prop1, prop2); //=> undefined, undefined
console.log(prop1 + prop2);//undefined+undefined => NaN 

let {w, h} = o1;
console.log("w, h=", w, h); //=>10,20
}

{
  5=="5";  //=>true
  5==="5"; //=>false
  
  9+"1" //=> '91'
  "7"+8 //=> '78'
  +"1"  //=> 1
  +"7"  //=> 7
  /*
  string + int ~> converts to string
  int + string ~> converts to string
  
  `intOp` string ~> converts to int
  */
}

{
  console.log('IIFE-defined local var scope & type: \nlet a = b = c = 3;');
(function(){
  let a = b = c = 3;
  console.log('within IIFE:');
  console.log('a:', typeof a);//=='number'
  console.log('b:', typeof b);//=='number'
  console.log('c:', typeof c);//=='number'
})();
  console.log('out-of IIFE:');
  console.log('a:', typeof a);//=='undefined');
  console.log('b:', typeof b);//=='number');
  console.log('c:', typeof c);//=='number');
/* a is `let`-defined
   b, c are implicit-`var` -defined
*/  
}
/* //same result: 
console.log('out-of IIFE-2:');
console.log('a:', typeof a);//=='undefined');
console.log('b:', typeof b);//=='number');
console.log('c:', typeof c);//=='number');
*/

{
// object-Boolean
new Boolean('aaa'); //[Boolean: true] //object
// boolean: primitive type
Boolean('any-non-empty-string'); //true
Boolean('false'); //true
Boolean(''); //false 

//'object'
let b= new Boolean('false');//[Boolean: true]
typeof b; //'object'

typeof Boolean('bbb'); //'boolean'
}


{
  console.log("arguments[0] manupulation and JavaScript strict mode:");
  // arguments[0] manupulation and JavaScript strict mode
  function f(arg_str){
    arguments[0] = "rewritten_F";
    return arg_str;
  }
  function g(arg_str){
    "use strict"; //this changes the game rules: `arguments` rewrite disabled
    arguments[0] = "rewritten_G";//will not change `arguments`
    return arg_str;
  }
  console.log("f()=", f("original_F"), "g()=", g("original_G") );
  //=> f()="rewritten_F" g() "original_G"
}

{
  //nitpicking with increments:
  let x= -1;
  let y= ++x; //0, 0
  console.log("nitpicking incr=", y++ - ++x); // 0 - 1 =>-1
}

{
  let s= new Set([1,2,3]); //=>Set { 1, 2, 3 }
  //s.push(4); //Uncaught TypeError: s.push is not a function
  //Set has no push(), it us an array function

  s.add(4);//Set { 1, 2, 3, 4 }
}
  
{
  class C{
  };
  function f(){}

  var ar = [];
  //
  typeof ar; //'object'
  typeof f;  //'function'
  typeof C;  //'function' //Why?! *)
  typeof C == typeof f; //=>true
  
  /* *) because: class C as object considered as function: 
  // Functions
typeof function() {} === 'function';
typeof class C {} === 'function';
typeof Math.sin === 'function';

  //typeof - JavaScript - MDN
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
  */
}

{
  console.log("undefined*4==", undefined*4);
  //=>undefined*4 ==NaN
}

{
  console.log("`in` keyword");
  arr = ['one','two','three']
  console.log( 3 in arr );//=>false
  console.log( 'one' in arr ); //=>false 
  //correct usage of `in` ??
  /*
  The in operator returns true if the specified property is in the specified object or its prototype chain.
  */
  console.log('length' in arr);//true
}

{
  console.log("'2'<'12'? ", '2'<'12');
  //lexicographical String comparison
}

{
  let arr = [1,3,5,7,9];
  console.log(`Math.max.apply(null, [${arr}]) =>`, Math.max.apply(null, arr) );
  //MDN: func.apply(thisArg, [ argsArray]); 

}



