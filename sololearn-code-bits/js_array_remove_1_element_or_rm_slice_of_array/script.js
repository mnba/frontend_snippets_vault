// Array.splice(startIdx, length)
let arr=[10,20,30,40,50,60];
let sp_piece= arr.splice(2,3); //returns =>[ 30, 40, 50 ] but cuts array and splice its ends::
arr; //=>[ 10,20, 60 ]
console.log(sp_piece, arr);//=>