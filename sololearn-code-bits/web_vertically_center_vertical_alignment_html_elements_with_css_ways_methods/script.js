//vert-center.js
function addHrefsToLinks() {
  const lnk_list = document.querySelectorAll('p>a');
  for(let l of lnk_list){ //l is a link, an "a-href" anchor element
    //we give to a.href empty value of "", but in browser , in case of local file
    // it can take 
    if (l.href === '' || l.href.startsWith('file://'))
      l.href = l.text;
  }
}

function setElementHtmlToSimpleText(){
  const vert_cent = document.getElementById('vert-center');
  let text_el = document.getElementById("url-list-text");
  //console.log("~ vert_cent.textContent", vert_cent.textContent);
  let s = vert_cent.textContent;
  // remove leading WS chars
  s = s.replace(/^\s*$|^(?=\n)$|^[ \t]*/gm, "");
  /* Explanation:  
   ^(?=\n)$ - this creates a group that captures nothing, 
              but prevents a newline by itself from getting consumed.
   ^\s*$    - cleanup empty lines
   ^[ \t]*  - remove WS start of non empty lines
   */
     //Examples ov Regex from console:
     // "  \n\n  a\n\n\n b\n\n cc\n  ".replace(/^(?=\n)$|^\s*/gm,"") == "a\n\n\nb\n\ncc\n"
     // "  \n\n a\n  b\n  \n  c".replace(/^\s*$|^(?=\n)$|^[ \t]*/gm, "") == "\na\nb\n\nc"
  s = s.replace(/^\n+/g, ""); //remove initial newline
  s = s.replace(/\n\n+/gm, "\n\n");  // remove empty lines
  //console.log("~ s=", s);

  // set the output
  text_el.innerHTML = s;
}
/* Helper answers for Regex'es: 
javascript - Single regex to remove empty lines and double spaces from multiline input - Stack Overflow
https://stackoverflow.com/questions/59957000/single-regex-to-remove-empty-lines-and-double-spaces-from-multiline-input

Regex to remove white spaces, blank lines and final line break in Javascript - Stack Overflow
https://stackoverflow.com/questions/31412765/regex-to-remove-white-spaces-blank-lines-and-final-line-break-in-javascript
 */


//-------------------------------------------------------------------------
// unused: zip () anv setElementHtmlToSimpleText_version1() unused now.
/**
 zip(): Javascript equivalent of Python's zip function
 //from: https://stackoverflow.com/a/10284006/647597
 //  see also pythonic - npm https://www.npmjs.com/package/pythonic 
               src= https://github.com/keyvan-m-sadeghi/pythonic/blob/master/index.js
  
 Array.prototype.map() - JavaScript - MDN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
map((element) => {  ... })
map((element, index) => {  ...  })
map((element, index, array) => {  ...  })
 */
function zip(arrays) {
  //convert to JS.Array
  //var args = [].slice.call(arrays);
  let args = arrays.map( arr => [].slice.call(arr) );
  console.log("🚀 ~ file: vert-center.js ~ line 25 ~ zip ~ args", args)
  // get shortest of all arg-arrays
  var shortest = args.length==0 ? [] : args.reduce(function(a,b){
    return a.length<b.length ? a : b 
  });
  //shortest is like args[0];
  return shortest.map(function(_,i){ //iterating over i, element unused: returns all zip-arrays
      return args.map( //iterating over arg-arrays : returns arr[column-i]
         function(array){ return array[i]; }) //for each arg array take its i-th element
  });
}

function setElementHtmlToSimpleText_version1(){
  const desc_list = document.querySelectorAll('#vert-center p');
  const a_list = document.querySelectorAll('#vert-center p>a');
  let text_el = document.getElementById("url-list-text");
  let s = "";
  //let arr_tmp = zip([desc_list,a_list]);
  //console.log("~ arr_tmp",arr_tmp);
  
  for (let [d,a] of zip([desc_list,a_list])){
    s+= d.textContent +"\n" + a.href + "\n\n";
  }
  //console.log("~ s=", s);
  text_el.innerHTML = s;
}
//end-of-code. 