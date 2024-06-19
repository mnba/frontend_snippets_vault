//Array wrongdoings - from #BadCode of Sololearn quiz

{
  // wrong-doings 1
  console.log('wrong-doings 1:');
let x=y=z=0;
let slice_start=1, slice_end=3;
let arr= [1,2,3].fill(0,slice_start, slice_end);
console.log(arr); //=>[1,0,0]

console.log('arr.slice=',arr.slice(), '\narr=', arr); //=>slice=[1,0,0] arr=[1,0,0]
}

{
  // wrong-doings 2
  console.log('\nwrong-doings 2:');
let arr= []
arr[0]=0;
console.log('arr=', arr, 'arr.length=',arr.length,'type=', typeof arr);
arr['1']=1;
console.log('arr=', arr, 'arr.length=',arr.length);
arr['two']=2;
console.log('arr=', arr, 'arr.length=',arr.length, typeof arr); //=>[0,1]
//arr== [ 0, 1, two: 2 ]
arr['3']=3;
console.log('arr=', arr,'arr.length=',arr.length); //=>[0,1,undefined,3]
//=> 
//arr== [ 0, 1, <1 empty item>, 3, two: 2 ]

console.log("arr['two']=", arr['two']);//=>2
}

