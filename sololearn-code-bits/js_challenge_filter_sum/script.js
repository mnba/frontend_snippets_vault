//What is the output of this code?//by feliciano

var arr = new Array(1,2,3,4);
var b = arr.filter( function(n) {
  return(n%2 !=0);
});
//filters the non-even elements
console.log(b);
console.log(b[0]+b[1]);

/* #BadCode sure,as always here in SoloLearn JS challenges. Never write such code! */