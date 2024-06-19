// arguments == arr, [...]
//  here the func. iterate over [...], via starting from k=1
function containsAll(arr) {
    for (let k = 1; k < arguments.length; k++) {
        let num = arguments[k];
        if (arr.indexOf(num) === -1) {
          return false;
        }
    }
    return true;
}

let arr1 = [2, 4, 6, 7];
console.log(containsAll(arr1, 2, 4, 7));
console.log(containsAll(arr1, 6, 4, 9));
