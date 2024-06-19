function setText() {
     var a = document.getElementById("demo");
     var arr = a.childNodes;
     for(var i=0;i<arr.length;i++) {
       //arr[i].innerHTML = "new text";
       if( ! arr[i].style ) // if undefined
         continue; //not all children are divs
       //alert (arr[i]);
       //arr[i].style.border= "thick solid blue";
       arr[i].style.borderStyle= "solid";
       arr[i].style.borderColor= "orange";
     }
}

//calling the function with setTimeout to make sure the HTML is loaded
setTimeout(setText, 600);