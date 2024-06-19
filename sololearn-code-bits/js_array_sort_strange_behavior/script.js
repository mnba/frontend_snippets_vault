//JS Array sort() strange behavior
let lsorted = [11,  3,  2,  1].sort();
console.log(lsorted); //=> 1,11,2,3 //Any-to-string, string comparison. strange behavior

//console.log(typeof(lsorted[1])); //=> number
/* ggl: mdn js sort
Array.prototype.sort()

The sort() method sorts the elements of an array in place and returns the sorted array. 
The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.
*/