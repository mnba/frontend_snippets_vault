/**
Misc links:
How to convert a DOM node list to an array in Javascript? - Stack Overflow
https://stackoverflow.com/questions/2735067/how-to-convert-a-dom-node-list-to-an-array-in-javascript
// var array = [].slice.call(nodeList, 0); //=>converts iterable to Array

NodeList documentation
https://developer.mozilla.org/en-US/docs/Web/API/NodeList

For loop for HTMLCollection elements
https://stackoverflow.com/q/22754315/647597

var list= document.getElementsByClassName("events");
[].forEach.call(list, function(el) {
    console.log(el.id);
});
 */
let dblist1 = null;


function load_data(){
  let ulist= document.getElementById('database-in-html');
  //-console.log('ulist=', ulist, ulist.children);
  let res_list= [];
  
  // HTMLCollection:
  //list1=== ulist.children // HTMLCollection
  // Array:
  //arraylist2_0= Array.from(ulist.children);
  let arraylist2= [].slice.call(ulist.children, 0); //Good: working; bad: copies all array //=>converts iterable to Array
  // NodeList: 
  let list3= ulist.querySelectorAll("ul>li"); //same: works but copies
  
  //ulist.children //htmlcollection has no .forEach
  //arraylist2 .forEach //ok
  //list3  .forEach //ok
   //.forEach((el)=>{   //});
   
  for(let el of ulist.children){ 
    //console.log('el=',el, el.firstChild.textContent, ' ');
    res_list.push(el.firstChild.textContent);
  }
  //console.log('\ndb res_list=', res_list);
  return res_list;
}

function search1(){
  //console.log("WIP search1() algo")
  let searchquery= document.getElementById('search-query').value;
  //console.log("query=", searchquery );
  
  let res=[];
  
  let opts={}; //options
  let qregexp = new RegExp(searchquery, 'i');
  
  res = dblist1.filter((dbstr,idx,arr) => {
    
    let m = dbstr.match(qregexp);
    if (m) 
     return true;
    else
     return false;
     
  }, opts);
  
  //'<br>'+txt; 
  console.log("res=", res)
  setSERP(res);
}

function setSERP(res){
  ;
}

function main() {
  //init db 
  dblist1 = load_data();
}

//
function onready(fn) { 
  if (document.readyState != 'loading'){ 
    fn();
  } 
  else { 
    document.addEventListener('DOMContentLoaded', fn); 
  } 
}

//window.addEventListener('load', load_data);
onready(main);

/*/ part2: search functions 
//---JS Array: find elt, find idx, by predicate ---
let arr = [3, 4, 5, 1, 8, 2, 0];

let val= arr.find(x => x > 3);
console.log('val=', val);

let idx= arr.findIndex(x => x > 3);
console.log('idx=', idx);
*/

