let cp; //colorPicker;

function onReady(){
  cp = document.getElementById("colsel");
  cp.addEventListener('input', oncolsel);
  //cp.addEventListener('change', oncolsel_ch);
}

function oncolsel(){
  //-console.log("oncolsel=",cp.value );
  //document.write
  my_docwrite(`new text <span style="color:${cp.value}; ">-selected color-</span>`);
  
  document.body.style.backgroundColor=  cp.value;
}

function oncolsel_ch(){
  console.log("oncolsel_ch=",cp.value );
  my_docwrite(`<span style="color:${cp.value}; ">-selected color-</p>`);
}

document.addEventListener('DOMContentLoaded', onReady);

//my "document.write()"
function my_docwrite(html_str){
  elt = document.createElement("div");
  elt.className= "docwrited";
  elt.innerHTML = html_str;
  document.body.append(elt);
}

