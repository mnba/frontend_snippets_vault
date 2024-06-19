//JQuery code used only for test/demo

/** return Object `obj` pretty-printed
     string representstion.
    Get rid of nonesense [Object object] strings!
 */
function Object_toString(obj){
  return "{" +
    ( Object.entries(obj)
      .map(([k,v])=>"\n "+k+":"+v+"") +
    "\n}" );
}
//Usage:
window.onload = ()=> {

//console.log("pane1.visible=", 
//Object_toString( $("#pane1:visible")) );
console.log("pane1=",  
 document.getElementById("pane1") );

console.log("pane1=",  
Object_toString( document. getElementById("pane1")) );

};
