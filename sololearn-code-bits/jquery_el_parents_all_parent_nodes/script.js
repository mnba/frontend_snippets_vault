$(function() {
  var e = $("p").parents();
  e.css("border", "2px solid red");
  //console.log(Array.from(e.keys()) );// e is not Array, failed 
  //console.log( Object.keys(e) ); //works
  // console.log( Object.getOwnPropertyNames(e)); //same as ^, works, prints only keys
  
 if(0){
  console.log("[", Object.keys(e).map(prop => e[prop]) , "]");
  
  console.log("\n{", Object.entries(e), "}");
  console.log("\n{", 
    Object.entries(e)
      .map(([k,v])=>"\n "+k+":"+v), 
    "\n}" );
  } //end-if
  console.log(Object_toString(e));
});

/** return string containing pretty-printed
     representation of Object `obj`
 */
function Object_toString(obj){
  return "{" +
    ( Object.entries(obj)
      .map(([k,v])=>"\n "+k+":"+v) +
    "\n}" );
}