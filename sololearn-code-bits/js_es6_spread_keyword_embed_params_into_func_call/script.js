const sum = (alist) => { //new style function declarati0n has no `arguments`
  s=0;
  for (val of alist) 
    s += val;
  return s;
};

//older style function decl has access to `argument` parameter
function somef(w, x, y, z) { 
  console.log(w + x + y + z);  //sum of 4 first params
  console.log(sum(arguments)); //sum of all params
};

let args = [2,3,4,5];
somef(1, ...args, 10);
