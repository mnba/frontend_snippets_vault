window.onload = function() {
  var div_btn = document.getElementById("div-btn");
  var ul = document.getElementById("ulist1");
  
  
  div_btn.onclick = function () {
    //document.body.innerHTML = Date();
    let newli= document.createElement("LI");
     //why always uppercase ElementName? LI not li
    let sdate= ( new Date() ).toLocaleTimeString();
    //wtf notwkg sdate= new Date().format("yyyy/MM/dd HH:mm:ss fff");
    //""+ Date();
    sdate = new Date().toISOString();
    newli.innerHTML= sdate; 
    ul.appendChild(newli);
  }
};
/*
Made with help of
http://youmightnotneedjquery.com/

https://www.w3schools.com/jsref/met_document_createelement.asp

https://stackoverflow.com/questions/9212889/formatting-a-date-in-javascript-till-the-millisecond
*/