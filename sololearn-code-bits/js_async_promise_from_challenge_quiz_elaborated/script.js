//
let flag = false;

function doAsync(){
  return new Promise( function(resolve, reject) {
     resolve();
    });
}
//*3pt see at the bottom
doAsync().then( function(val){
  console.log(flag); //see *1 and *2
});

// uncomment one of *1, *2
// change value of `flag` variable: immediately or 1ms later

// *1 if this uncommented program prints true
flag = true; //original version from quiz

//*2 if this uncommented program prints false,
// even if delay==1 millisecond.
// Thread changing is heavier operation.*3
//setTimeout( ()=>{ flag = true; }, 1);

//*3 I supposed that order of threads in thread-queue of JS is important
// so I moved setTimeout() call upper to the point *3pt, but it didn't help:
// even with delay=0, in any case result is "false". 
