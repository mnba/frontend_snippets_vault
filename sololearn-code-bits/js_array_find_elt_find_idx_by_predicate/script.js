//JS Array: find elt, find idx, by predicate
let arr = [3, 4, 5, 1, 8, 2, 0];

let val= arr.find(x => x > 3);
console.log('val=', val);

let idx= arr.findIndex(x => x > 3);
console.log('idx=', idx);
