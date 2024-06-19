// What will bw printed in console ?

//cp means "checkpoint", "контрольная точка"

//One can turn off any line by commenting it out, just put "//" in the beginning of the line
{
console.log("1. for cycle:");

var sum = 0;
console.log("cp1 sum=", sum);

for(let i = 1; i<=4; i++) {
 console.log("cp2 sum=", sum, "i=", i);
 if(i == 3 || i== 2) {
    console.log("cp3 sum=", sum, "i=", i);
    continue; 
 }
 console.log("cp4 sum=", sum, "i=", i);
 sum +=i;
 console.log("cp5 sum=", sum, "i=", i);
}

console.log("cp6 i=", i);
console.log("sum=", sum); //Final Sum

/*
other options for if
if (i >= 2 and i<4 ) 
  continue;
*/
}

//==============================
//2. 
{
console.log("\n2. do-while cycle:");

/* do { cycle } while condition is true, 
   until it becomes false. 
 */
let i = 1;
//let cycle_result= 
do{
  console.log("i=", i);
  ++i;
  console.log("   //i=",i, "floor i/2=", Math.floor(i/2));
}while(Math.floor(i/2) == 1);

// Does do-while cycle statement return  latest computed body value? -No.
//-console.log("cycle_result=", cycle_result);

}
